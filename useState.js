import "./styles.css";
import { useState } from "react";

const App = () => {
  //JS code here
  let [a, setA] = useState(10);

  const incrementCounter = () => {
    setA([1,2,3,4,55,5]);
  };

  return (
    <>
      <button
        onClick={incrementCounter}
        style={{ margin: "20px", height: "90px" }}
      >
        <h1>{a}</h1>
      </button>
    </>
  );
};
export default App;