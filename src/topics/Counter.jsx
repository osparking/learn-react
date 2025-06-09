import React, { useState } from "react";
import "../index.css"

const Counter = (param) => {
  const [count, setCount] = useState(0);
  function oneManEntered() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={oneManEntered}>{param.action}</button>
      <p>{param.label}: {count}</p>
    </>
  );
};

export default Counter;
