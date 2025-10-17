const express = require("express");

const itemsController = require("../Controllers/itemsController");  

const itemsRouter = express.Router();

itemsRouter.post("/todos", itemsController.postTodoItem);
itemsRouter.get("/todos", itemsController.getTodoItems);
itemsRouter.delete("/todos/:id", itemsController.deleteTodoItem);
itemsRouter.patch("/todos/:id", itemsController.updateTodoItem);

module.exports = itemsRouter;
