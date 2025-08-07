import "./App.css";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItems from "./components/TodoItems";
import UsestateVsUseRfe from "./components/UsestateVsUseRfe";

function App() {
  return (
    <center>
      <AppName />
      <UsestateVsUseRfe />
      {/* <AddTodo />
      <TodoItems /> */}
    </center>
  );
}

export default App;
