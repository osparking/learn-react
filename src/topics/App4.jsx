const App4 = () => {
  const showAlert = () => {
    alert("나는 경보이다");
  };

  return (
    <>
      <h1>사건 응답</h1>
      <button onClick={showAlert}>클릭하면 경보가 떠요.</button>
    </>
  );
};

export default App4;
