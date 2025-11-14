import React, { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

  const incrementClick = () => {
    setCount(count + 1);
  };

  const decrementClick = () => {
    setCount(count - 1);
  };

  return (
    <section>
      <button onClick={decrementClick}>-</button>
      <p>{count}</p>
      <button onClick={incrementClick}>+</button>
    </section>
  );
};

export default MyButton;
