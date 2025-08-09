import { useState } from "react";
import List from "./components/List";

function App() {

  const [studentName, setstudentName] = useState([
    "Aman",
    "Kumar",
    "Atul",
    "Raj",
    "Singh",
  ]);

  const onChangeHandle = (event) =>{
    if(event.key === "Enter"){
      const newArr = [...studentName, event.target.value]
      setstudentName(newArr)
      event.target.value = ''
      console.log(event.target.value);
      console.log(newArr);
    }
  }

  return (
    <>
      <h1 className="ml-4">Learning Map</h1>
      <List list={studentName} />
      <input onKeyDown={onChangeHandle} className="border-2 m-4 text-3xl" type="text" placeholder="Enter here"/>
    </>
  );
}

export default App;
