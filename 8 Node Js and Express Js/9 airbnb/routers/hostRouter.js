const express = require("express");
const path = require("path");

const hostRouter = express.Router();
const rootDir = require("../util/path");

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "Add-home.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(rootDir, "views", "Home-added.html"));
});

module.exports = hostRouter;
