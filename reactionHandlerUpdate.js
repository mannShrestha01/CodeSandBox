import "./styles.css";
//hooks
import { useState } from "react";

//functional react components

const App = () => {
  //JSX
  const [count, setCount] = useState(0);
  const [currentReaction, setCurrentReaction] = useState("Like");
  const [showReactionDiv, setShowReactionDiv] = useState(false);
  const [color, setColor] = useState(null);
  const reactionColor = ["aqua", "yellow", "pink", "red"];

  // wow-> like
  // 1 -> 0
  // color-> null
  const handleReaction = (action, index) => {
    console.log(action);
    setColor(reactionColor[index]);
    if (count == 0) {
      setCount(1);
      setCurrentReaction(action);
    } else if (currentReaction == action) {
      setCount(0);
      setColor(null);
      setCurrentReaction("Like");
      //color is always blue
      // count is always one
    } else {
      setCurrentReaction(action);
    }
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
          <button onClick={() => handleReaction("Like", 0)}>Like</button>
          <button onClick={() => handleReaction("Wow", 1)}>Wow</button>
          <button onClick={() => handleReaction("Haha", 2)}>Haha</button>
          <button onClick={() => handleReaction("Angry", 3)}>Angry</button>
        </div>
      ) : null}
      <button
        style={{ backgroundColor: color }}
        onClick={() => handleReaction(currentReaction)}
        onMouseEnter={displayReactionDiv}
      >
        {currentReaction}
      </button>
      <br />
      {count} person reacted to your post
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
