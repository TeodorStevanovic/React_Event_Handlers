import React, { useState } from "react";

const MultiButtonCounter = () => {
  const [count, setCount] = useState({
    first: 0,
    second: 0,
    third: 0,
  });

  const incrementCount = (key) => {
    setCount((prevCount) => ({
      ...prevCount,
      [key]: prevCount[key] + 1,
    }));
  };

  return (
    <>
      <button onClick={() => incrementCount("first")}>
        First {count.first}
      </button>
      <button onClick={() => incrementCount("second")}>
        Second {count.second}
      </button>
      <button onClick={() => incrementCount("third")}>
        Third {count.third}
      </button>
    </>
  );
};

export default MultiButtonCounter;
