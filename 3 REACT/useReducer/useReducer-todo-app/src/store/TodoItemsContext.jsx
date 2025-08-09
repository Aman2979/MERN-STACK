import { act, createContext, useReducer } from "react";
import initialTodoItems from "./InitialTodoItems";
import TodoItemReducer from "./TodoItemReducer";

export const TodoItemsContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoItems, dispatch] = useReducer(TodoItemReducer,initialTodoItems);

  const addTodoItem = (todoText, todoDate) => {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        todoText: todoText,
        todoDate: todoDate,
      },
    });
  };

  const deleteTodoItem = (todoId) => {
    dispatch({
      type: 'DELETE_ITEM',
      payload: {
        todoId: todoId
      }
    })
  };

  return (
    <TodoItemsContext.Provider
      value={{ todoItems, addTodoItem, deleteTodoItem }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
