import Button from "./button";

const TodoItem = ({id, textTodo, dateTodo}) => {
  return (
    <div class="container text-center todoContainer">
      <div class="row totoText" >
        <div class="col-6 col-2 text-truncate">{textTodo}</div>
        <div class="col-4">{dateTodo}</div>
        <div class="col-2">
          <Button btnType="danger" btnText="Delete"/>
        </div>
      </div>
    </div>
  );
};

export default TodoItem
