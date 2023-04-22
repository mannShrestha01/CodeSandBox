import "./styles.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(null);
  const [showReactionDiv, setshowReactionDiv] = useState(false)

  const handleReaction = () => {
    count === 0 ? setColor('maroon') : setColor(null)
    count === 0 ? setCount(1) : setCount(0); 
  };

  const displayReactionDiv = () =>{
    setshowReactionDiv(true)
  }

  return (
    <div>

      
      {showReactionDiv ? (
        <div>
        <button>Wow</button>
        <button>HaHa</button>
        <button>Angry</button>
      </div>
      ) : null
      }
      


      <button 
      style = {{backgroundColor : color}}
      onClick={handleReaction}
      onMouseEnter = {displayReactionDiv}>Like</button>
      {count}
    </div>
  );
};
export default App;
