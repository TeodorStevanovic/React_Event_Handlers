import React, { useState } from "react";

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <button onClick={() => {setCounter(counter + 1)}}>+</button> 
      <button onClick={() => {setCounter(0)}}>Reset</button>
      <p>{counter}</p>
    </>
  );
};

export default ClickCounter;
