import { useReducer, useRef } from "react";

const counterReducer = (currentState, action) => {
  let newCurrentState = currentState;
  if (action.type === "INCREMENT") {
    newCurrentState += 1;
  } else if (action.type === "DECREMENT") {
    newCurrentState -= 1;
  } else if (action.type === "RESET") {
    newCurrentState = 0;
  } else if (action.type === "DOUBLE") {
    newCurrentState *= 2;
  } else if (action.type === "CHANGE") {
    newCurrentState += action.payload.changeBy;
  }
  return newCurrentState;
};

function App() {
  const [counterVal, counterDispatch] = useReducer(counterReducer, 0);

  const takeInputValue = useRef();

  const handleIncrement = () => {
    counterDispatch({
      type: "INCREMENT",
    });
  };

  const handleDecrement = () => {
    counterDispatch({
      type: "DECREMENT",
    });
  };

  const handleReset = () => {
    counterDispatch({
      type: "RESET",
    });
  };

  const handleDouble = () => {
    counterDispatch({
      type: "DOUBLE",
    });
  };

  const handleChange = () => {
    let num = takeInputValue.current.value;
    takeInputValue.current.value = "";
    counterDispatch({
      type: "CHANGE",
      payload: {
        changeBy: parseInt(num),
      },
    });
  };

  return (
    <>
      <h1>Count : {counterVal}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDouble}>Duble</button>
      <button onClick={handleChange}>ChangeBy</button>
      <input type="text" ref={takeInputValue} placeholder="Number" />
    </>
  );
}

export default App;
