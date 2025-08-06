import TodoItem from "./TodoItem";

const TodoItems = () => {
  const todoItems = [
    { id: 1, textTodo: "Buy Milk", dateTodo: "29/07/2025" },
    { id: 2, textTodo: "Go to college", dateTodo: "WeekDay" },
    { id: 2, textTodo: "Practice", dateTodo: "Everyday" },
  ];

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem textTodo={item.textTodo} dateTodo={item.dateTodo} />
      ))}
    </>
  );
};

export default TodoItems;
