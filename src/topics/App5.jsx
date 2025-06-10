import { useState } from "react";
import "../index.css";

const App5 = () => {
  const [count, setCount] = useState(0);
  function oneManEntered() {
    setCount(count + 1);
  }
  return (
    <div className="hWhole center">
      <div>
        <div className="center h50">CGV - 제 1 관</div>
        <div className="center h50">
          <button onClick={oneManEntered}>입구1</button>
        </div>
        <div className="center h50">
          <button onClick={oneManEntered}>입구2</button>
        </div>
        <p className="center">{count}</p>
      </div>
    </div>
  );
};

export default App5;
