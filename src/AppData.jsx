import { useState } from "react";
import "./App.css";
import { MyButton } from "./start_fast/MyButton";

function AppData() {
  const [count, setCount] = useState(0);
  const counterLabel = "계수기 값 - ";

  return (
    <>
      <h1>등산객 숫자</h1>
      <div className="card redCarpet">
        <MyButton
          style="counterFont"
          label={counterLabel}
          count={count}
          cbFunc={setCount}
        />
      </div>
    </>
  );
}

export default AppData;
