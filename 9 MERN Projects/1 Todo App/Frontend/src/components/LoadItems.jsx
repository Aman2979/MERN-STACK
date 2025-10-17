import { useContext } from "react";
import { TodoItemsContext } from "../store/TodoItemsContext";
import { useEffect } from "react";
import { useState } from "react";
import { todoItemToClientModel } from "../utils/ModelUtil";

const LoadItems = () => {
  const { todoItems, addAllTodoItems } = useContext(TodoItemsContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((items) => {
        const newItems = items.map(todoItemToClientModel);
        addAllTodoItems(newItems);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-10">
          <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
          <span className="text-blue-500 font-medium text-lg">Loading your todos...</span>
        </div>
      )}
      {!isLoading && todoItems.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16">
          <svg
            className="w-16 h-16 text-blue-300 mb-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 7v6l4 2m6-5a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-gray-500 text-lg font-semibold">Enjoy your day! You have no pending todos.</p>
        </div>
      )}
    </>
  );
};

export default LoadItems;