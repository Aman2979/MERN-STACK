const TodoItemReducer = (currentItems, action) => {
  if (action.type === "ADD_ITEM") {
    const todoText = action.payload.todoText;
    const todoDate = action.payload.todoDate;
    return [...currentItems, { id: todoText, todoText, todoDate }];
  }else if(action.type === 'DELETE_ITEM'){
    return currentItems.filter(item => item.id !== action.payload.todoId);
  }
};

export default TodoItemReducer