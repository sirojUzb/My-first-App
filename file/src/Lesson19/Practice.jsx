import { useState } from "react";

const Practice = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        gridGap: "16px",
      }}
    >
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Practice;
