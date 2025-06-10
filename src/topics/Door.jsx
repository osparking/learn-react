import "../index.css";

const Door = ({ title, handler }) => {
  return (
    <>
      <button onClick={handler}>{title}</button>
    </>
  );
};

export default Door;
