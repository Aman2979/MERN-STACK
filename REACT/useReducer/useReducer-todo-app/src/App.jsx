import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import { TodoProvider } from "./store/todoItemsContext";

function App() {
  return (
    <TodoProvider>
      <center>
        <AppName />
        <AddTodo />
        <TodoItems />
      </center>
    </TodoProvider>
  );
}

export default App;
