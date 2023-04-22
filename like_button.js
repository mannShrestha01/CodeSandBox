import "./styles.css";
//hooks
import { useState } from "react";
//functional react components

const App = () => {
  //JSX
  const [count, setCount] = useState(0);
  const [showReactionDiv, setShowReactionDiv] = useState(false);

  const [color, setColor] = useState(null);

  const handleReaction = () => {
    count === 0 ? setColor("maroon") : setColor(null);
    count === 0 ? setCount(1) : setCount(0);
  };

  const displayReactionDiv = () => {
    setShowReactionDiv(true);
  };

  return (
    <div>
      {/* there should be onClick in the button */}
      {/* on clicking the button function should execute */}
      {/* function should have the code setCount(1) */}
      {showReactionDiv ? (
        <div>
          <button>Wow</button>
          <button>Haha</button>
          <button>Angry</button>
        </div>
      ) : null}
      <button
        style={{ backgroundColor: color }}
        onClick={handleReaction}
        onMouseEnter={displayReactionDiv}
      >
        Like
      </button>
      <br />
      {count}
    </div>
  );
};
export default App;

// first task
// using inline css, change the button color to grey
// when clicked onn like, like value should change to 1
//

//when we click on like
//like color changes
//
