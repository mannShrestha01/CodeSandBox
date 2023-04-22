import "./styles.css";
import {useState} from "react";

 const App = () =>{
  const [count, setCount] = useState(0);

  const handleReaction = () =>{
    if(count === 0){
      setCount(1)
    }else{
      setCount(0)
    }
  }

  

  return (
   
    <>
      <button onClick = {handleReaction}>Like</button>
      {count}

    </>
  );
};
export default App;