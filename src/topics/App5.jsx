import { useState } from "react";
import Door from "./Door";

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
          <Door title="입구1" handler={oneManEntered} />
        </div>
        <div className="center h50">
          <Door title="입구2" handler={oneManEntered} />
        </div>
        <p className="center">{count}</p>
      </div>
    </div>
  );
};

export default App5;
