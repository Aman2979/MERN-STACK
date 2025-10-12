const TodoItem = require("../model/TodoItem");

exports.postTodoItem = async (req, res, next) => {
  try {
    const todoItem = new TodoItem(req.body);
    const item = await todoItem.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}