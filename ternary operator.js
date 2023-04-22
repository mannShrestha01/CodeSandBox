import "./styles.css";

//hooks

import { useState } from "react";

//functional react components




const App = () => {

  const [a, setA] = useState(10);




  const changeCount = (operations)=> {

    operations === 'add' ? setA(a+1) :  setA(a-1)  //ternary operator

  }

  //JSX

  return (

    <div>

      <button onClick={()=>changeCount('add')}>+</button>

      {a}

      <button onClick={()=>changeCount('substract')}>-</button>

    </div>

  );

};

export default App;