const express = require("express");

const storeRouter = express.Router();

const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getIndex);
storeRouter.get("/homes", storeController.getHomes);
storeRouter.get("/homes/:homeIdentity", storeController.getHomeDetails);
storeRouter.get("/favourites", storeController.getFavourites);
storeRouter.post("/favourites", storeController.postAddFavourites);
storeRouter.post(
  "/favourites/delete/:homeId",
  storeController.postRemoveFavourite
);
storeRouter.get("/rules/:homeId", storeController.getRules);

module.exports = storeRouter;
