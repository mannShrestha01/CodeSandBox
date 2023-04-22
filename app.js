import "./styles.css";

const App = () => {
  //JS code here
  const triggerClick = () => {
    console.log("I am Clicked!");
  };
  return (
    <>
      <button onClick={triggerClick} style={{ margin: "20px", height: "50px" }}>
        Click Me
      </button>
    </>
  );
};
export default App;