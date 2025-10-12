const express = require("express");

const itemsController = require("../Controllers/itemsController");  

const itemsRouter = express.Router();

itemsRouter.post("/todos", itemsController.postTodoItem);


module.exports = itemsRouter;
