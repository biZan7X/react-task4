import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const increaseCount = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button
        onClick={increaseCount}
        style={{
          padding: "1.5rem",
          borderRadius: "50%",
          border: "none",
          fontSize: "xx-large",
          marginRight: "3rem"
        }}
      >
        +
      </button>
      <button
        onClick={decreaseCounter}
        style={{
          padding: "1.5rem",
          borderRadius: "50%",
          border: "none",
          fontSize: "xx-large"
        }}
      >
        -
      </button>
    </div>
  );
}
