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

  if (isAdmin) {
    content = <AdminPage />;
  } else {
    content = <LoginPage />;
  }

  return (
    <>
      <h1>조건부 렌더링</h1>
      <h3>긴 판</h3>
      <div>{content}</div>
      <button onClick={() => actLogin()}>로그인</button>
    </>
  );
}

export default App;
