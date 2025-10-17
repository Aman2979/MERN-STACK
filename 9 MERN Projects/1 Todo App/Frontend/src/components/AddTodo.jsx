import { TodoItemsContext } from "../store/TodoItemsContext";
import { todoItemToClientModel } from "../utils/ModelUtil";
import Button from "./Button";
import {useRef, useContext} from "react";

const AddTodo = () => {

  const todoTextInput = useRef();
  const todoDateInput = useRef();
  const {addTodoItem} = useContext(TodoItemsContext);

  const addHandler = () => {
    const todoText = todoTextInput.current.value;
    const todoDate = todoDateInput.current.value;
    todoTextInput.current.value = '';
    todoDateInput.current.value = '';
    fetch("http://localhost:3000/todos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        task: todoText,
        date: todoDate
      })
    }).then(res => res.json())
    .then(serverItem => {
      const {id, todoText, todoDate} = todoItemToClientModel(serverItem);
      addTodoItem(id, todoText, todoDate);
    })
  }

  return (
    <div className="w-full max-w-xl mx-auto mt-8 bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-center gap-4">
      <input
        type="text"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-base transition"
        placeholder="Enter your todo..."
        ref={todoTextInput}
      />
      <input
        type="date"
        ref={todoDateInput}
        className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none text-base transition"
      />
      <div className="w-full sm:w-auto">
        <Button btnType="success" btnText="Add" handler={e => { e.preventDefault(); addHandler(); }} />
      </div>
    </div>
  );
};

export default AddTodo;