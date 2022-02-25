import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //   function for suntraction
  function sub() {
    setCount(count - 1);
  }
  function add() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={sub}>Decrease</button>
      <button onClick={add}>Increase</button>
    </div>
  );
};

export default Counter;
