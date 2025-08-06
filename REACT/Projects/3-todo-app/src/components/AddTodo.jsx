import Button from "./button";

const AddTodo = () => {
  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          {" "}
          <input
            type="text"
            class="form-control inputBox"
            placeholder="Enter todo here"
          ></input>
        </div>
        <div class="col-4 ">
          <input type="date" class="form-control inputBox"></input>
        </div>
        <div class="col-2">
          <Button btnType="success" btnText="Add" />
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
