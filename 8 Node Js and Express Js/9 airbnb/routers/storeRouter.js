const express = require("express");

// Core Module
const path = require("path");
const rootDir = require("../util/path");

const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
});
module.exports = storeRouter;
