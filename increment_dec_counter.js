import "./styles.css";
import { useState } from "react";

const App = () => {
  //JS code here
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter((counter) => (counter += 1));
  };

  let decrementCounter = () => {
    setCounter((counter) => {
      if (counter > 0) {
        return (counter -= 1);
      } else {
        return (counter = 0);
      }
    });
  };

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button
        onClick={incrementCounter}
        style={{ margin: "30px", height: "90px" }}
      >
        +1
      </button>
      <button
        onClick={decrementCounter}
        style={{ margin: "30px", height: "90px" }}
      >
        -1
      </button>
    </div>
  );
};
export default App;



--------------------------------------



import "./styles.css";
import React, { useState } from "react";

const App = () => {
  const [counter, setCount] = useState(0);
  const incrementCounter = () => {
    setCount(counter + 1);
  };
  const decrementCounter = () => {
    if (counter > 0) setCount(counter - 1);
  };
  return (
    <>
      <button
        onClick={incrementCounter}
        style={{ margin: "20px", height: "90px" }}
      >
        +1
      </button>
      {counter}
      <button
        onClick={decrementCounter}
        style={{ margin: "20px", height: "90px" }}
      >
        -1
      </button>
    </>
  );
};
export default App;