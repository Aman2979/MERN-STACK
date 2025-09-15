const ENV = process.env.NODE_ENV || "production";

require("dotenv").config({
  path: `.env.${ENV}`,
});

// Core Modules
const path = require("path");
const fs = require("fs");

// External Modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const Mongodb_session = require("connect-mongodb-session");
const multer = require("multer");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");

// Local Modules
const { hostRouter } = require("./routers/hostRouter");
const { authRouter } = require("./routers/authRouter");
const storeRouter = require("./routers/storeRouter");
const rootDir = require("./util/path-util");
const errorController = require("./controllers/errorController");

const MongoDbStore = Mongodb_session(session);
const MONGO_DB_URL = `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@aman0001.w1coczr.mongodb.net/${process.env.MONGO_DB_DATABASE}`;

const sessionStore = new MongoDbStore({
  uri: MONGO_DB_URL,
  collection: "sessions",
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const safeDate = new Date().toISOString().replace(/:/g, "-");
    cb(null, safeDate + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const loggingPath = path.join(rootDir, 'access.log');
const loggingStream = fs.createWriteStream(loggingPath, { flags: 'a' });


const app = express();
app.use(helmet());
app.use(compression());
app.use(morgan('combined', { stream: loggingStream }));


app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));
app.use("/uploads", express.static(path.join(rootDir, "uploads")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({ storage, fileFilter }).single("photo"));
app.use(
  session({
    secret: "MERN LEARNING",
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  })
);

app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (!req.session.isLoggedIn) {
    return res.redirect("/login");
  }
  next();
});
app.use("/host", hostRouter);
app.use(authRouter);

app.use(errorController.get404);

const PORT = process.env.PORT || 3000;
mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});
