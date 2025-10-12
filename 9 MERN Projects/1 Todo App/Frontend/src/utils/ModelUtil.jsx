export const todoItemToClientModel = (serverItem) => {
  return {
    id: serverItem._id,
    todoText: serverItem.task,
    todoDate: serverItem.date,
    completd: serverItem.completed
  }
}