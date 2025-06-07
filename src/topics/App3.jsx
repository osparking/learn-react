import React from "react";

const App3 = () => {
  const products = [
    { name: "상추", id: 1 },
    { name: "혁대", id: 2 },
    { name: "락스", id: 3 },
  ];

  const items = products.map((product) => (
    <li key={product.id}>{product.name}</li>
  ));

  return (
    <>
      <h1>목록 표출</h1>
      <ul>{items}</ul>
    </>
  );
};

export default App3;
