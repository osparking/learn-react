const App3 = () => {
  const products = [
    { name: "상추", id: 1, isPerishable: true },
    { name: "혁대", id: 2, isPerishable: false },
    { name: "락스", id: 3, isPerishable: false },
  ];

  const itemStyle = (flag) => {
    color: flag ? "hotpink" : "black";
  };

  const style = (p) => {
    return {
      color: p.isPerishable ? "green" : "black",
    };
  };

  const items = products.map((product) => (
    <li key={product.id} style={style(product)}>
      {product.name}
    </li>
  ));

  return (
    <>
      <h1>목록 표출</h1>
      <ul>{items}</ul>
    </>
  );
};

export default App3;
