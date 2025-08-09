import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todoItemsContext";

const TodoItems = () => {

  const {todoItems} = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate} />
      ))}
    </>
  );
};

export default TodoItems;