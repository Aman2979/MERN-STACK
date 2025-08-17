const express = require("express");

const storeRouter = express.Router();

const storeController = require('./../controllers/storeController')

storeRouter.get("/", storeController.getHome);

module.exports = storeRouter;