import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  function oneManEntered() {
    setCount(count + 1);
  }

  return (
    <>
      <div>신명 입장객 수</div>
      <button onClick={oneManEntered}>입장</button>
      <p>입장객 수: {count}</p>
    </>
  );
};

export default Counter;
