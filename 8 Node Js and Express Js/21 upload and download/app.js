// Core Modules
const path = require("path");

// External Modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const Mongodb_session = require("connect-mongodb-session");
const multer = require("multer");

// Local Modules
const { hostRouter } = require("./routers/hostRouter");
const { authRouter } = require("./routers/authRouter");
const storeRouter = require("./routers/storeRouter");
const rootDir = require("./util/path-util");
const errorController = require("./controllers/errorController");

const MongoDbStore = Mongodb_session(session);
const MONGO_DB_URL =
  "mongodb+srv://aman0001:aman2979@aman0001.w1coczr.mongodb.net/?retryWrites=true&w=majority&appName=aman0001";

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
  // The fileFilter is correct, but for better clarity, you can explicitly handle the error case.
  const allowedTypes = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only image files are allowed!"), false);
  }
};

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));
app.use("/uploads", express.static( path.join(rootDir, "uploads")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({ storage , fileFilter }).single("photo"));
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

const PORT = 3001;
mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
    // Optionally, exit the process or handle the error as needed
  });
