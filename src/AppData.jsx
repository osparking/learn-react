import "./index.css";

function AppData() {
  const apple = {
    domain: "https://www.collinsdictionary.com",
    path: "/images/thumb/apple_158989157_250.jpg?version=6.0.84",
    desc: "원산지 강원 영월",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
      <div>
          <h1>영월 사과</h1>
          <img src={apple.domain + apple.path} alt={"사과: " + apple.desc} />
        </div>
      </div>
    </>
  );
}

export default AppData;
