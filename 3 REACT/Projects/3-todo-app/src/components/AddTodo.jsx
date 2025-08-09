import Button from "./button";

const AddTodo = () => {
  const addHandler = () => {
    console.log("Trying to add items");
  };


  const textChangeHandler = (event) =>{
    console.log(event.target.value, event)
  }


  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          {" "}
          <input
            type="text"
            class="form-control inputBox"
            placeholder="Enter todo here"
            onChange={textChangeHandler}
          ></input>
        </div>
        <div class="col-4 ">
          <input type="date" class="form-control inputBox"></input>
        </div>
        <div class="col-2">
          <Button btnType="success" btnText="Add" addHandler={addHandler}/>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
