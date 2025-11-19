import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const MultiButtonCounter = () => {
  const [count, setCount] = useState({
    like: 0,
    dislike: 0,
  });

  const incrementCount = (key) => {
    setCount((prevCount) => ({
      ...prevCount,
      [key]: prevCount[key] + 1,
    }));
  };

  return (
    <>
      <button onClick={() => incrementCount("like")}>
      <FontAwesomeIcon icon={faThumbsUp} />  {count.like}
      </button>
      <button onClick={() => incrementCount("dislike")}>
        <FontAwesomeIcon icon={faThumbsDown}/>  {count.dislike}
      </button>
    </>
  );
};

export default MultiButtonCounter;
