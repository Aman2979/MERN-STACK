// Core Modules
const path = require("path");

// External Modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const Mongodb_session = require("connect-mongodb-session");

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

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
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

const PORT = 3000;
mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}`);
  });
});
