export function MyButton({ style, label, count, cbFunc }) {
  return (
    <button className={style} onClick={() => cbFunc((value) => value + 1)}>
      {" "}
      {label} {count}
    </button>
  );
}
