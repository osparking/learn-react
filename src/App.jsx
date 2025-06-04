import { useState } from 'react'
import './App.css'
import { MyButton } from './start_fast/MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>나의 버튼에 환영합니다.</h1>
      <div className="card redCarpet">
        <MyButton
          style="counterFont"
          label="계수기 값: "
          count={count}
          cbFunc={setCount}
        />
      </div>
    </>
  );
}

export default App
