import { useContext } from "react";
import Button from "./Button";
import { TodoItemsContext } from "../store/todoItemsContext";

const TodoItem = ({ id, todoText, todoDate }) => {
  const { deleteTodoItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-5 text-truncate">{todoText}</div>
        <div className="col-3">{todoDate}</div>
        <div className="col-2">
          <Button
            btnType="danger"
            btnText="Delete"
            handler={() => deleteTodoItem(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
