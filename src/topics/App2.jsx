import { useState } from "react";

const AdminPage = () => {
  return <p>관리자 페이지</p>;
};

const LoginPage = () => {
  return <p>로그인 폼</p>;
};

function App() {
  let content;
  const [isAdmin, setIsAdmin] = useState(false);

  const actLogin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <>
      <h1>조건부 렌더링</h1>
      <h3>최숏 판 - 단, 로그인 페이지 없을 때</h3>
      <button onClick={() => actLogin()}>로그인</button>
      <div>{isAdmin && <AdminPage />}</div>
    </>
  );
}

export default App;
