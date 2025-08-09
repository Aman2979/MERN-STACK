import { useRef, useState } from "react";

function UsestateVsUseRfe() {
  console.log("Painting");
  const [useStateClicked, setuseStateClicked] = useState(0);
  const useRefClicked = useRef(0);

  const useStateHandler = () => {
    console.log("Use State Click");
    setuseStateClicked(useStateClicked + 1);
  };

  const useRefHandler = () => {
    console.log("Use Ref Click");
    useRefClicked.current++;
  };

  return (
    <div>
      <h1>usestate: {useStateClicked}</h1>
      <h1>useref: {useRefClicked.current} </h1>
      <button onClick={useStateHandler}>useState</button>
      <button onClick={useRefHandler}>useRef</button>
    </div>
  );
}

export default UsestateVsUseRfe;
