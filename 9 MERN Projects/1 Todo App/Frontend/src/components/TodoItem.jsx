import { TodoItemsContext } from "../store/TodoItemsContext";
import { todoItemToClientModel } from "../utils/ModelUtil";
import Button from "./Button";
import { useContext, useState } from "react";

const TodoItem = ({ id, todoText, todoDate, completed }) => {
  const { deleteTodoItem } = useContext(TodoItemsContext);

  const [isComplete, setIsComplete] = useState(completed);

  const formatedDate = new Date(todoDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const toggleCheckbox = () => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !isComplete }),
    })
      .then((res) => res.json())
      .then((updatedItem) => {
        const clientUpdatedItem = todoItemToClientModel(updatedItem);
        setIsComplete(clientUpdatedItem.completed);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHandler = () => {
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedItem) => {
        const clientDeletedItem = todoItemToClientModel(deletedItem);
        deleteTodoItem(clientDeletedItem.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-6 my-6 bg-gradient-to-r from-white via-blue-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
      <div className="flex flex-row items-start w-full flex-1 min-w-0">
        <div className="flex-shrink-0 flex items-center mr-4 mt-2 sm:mt-0">
          <input
            checked={isComplete}
            onChange={toggleCheckbox}
            type="checkbox"
            className="h-6 w-6 mt-4 accent-blue-500 border-2 border-blue-300 rounded-md transition-all duration-200 focus:ring-2 focus:ring-blue-400 shadow checked:border-blue-500"
            aria-label={isComplete ? "Mark as incomplete" : "Mark as complete"}
          />
        </div>
        <div
          className={`flex-1 min-w-0 transition-all duration-200 ${
            isComplete ? "line-through text-gray-400" : "text-gray-900"
          }`}
        >
          <p
            className="text-base sm:text-lg font-semibold break-words whitespace-pre-line"
            title={todoText}
          >
            {todoText}
          </p>
          <p className="text-xs sm:text-sm text-blue-500 mt-1 italic">
            {formatedDate}
          </p>
        </div>
      </div>
      <div className="w-full sm:w-auto mt-3 sm:mt-0 flex-shrink-0 flex justify-end">
        <Button btnType="danger" btnText="Delete" handler={deleteHandler} />
      </div>
    </div>
  );
};

export default TodoItem;
