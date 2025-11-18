import React, { useState } from "react";
import { reverse } from "./reverse";

const MyList = (props) => {
  const [list, setList] = useState(["First", "Second", "Third"]);
  const handleReverse = () => {
    setList(reverse(list));
  };

  const reverseMessage = () => {
    console.log("Reverse")
  }

  return (
    <>
      <button onClick={() => {handleReverse(); reverseMessage()}}>{props.children}</button>
      <ul>
        {list.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </>
  );
};

export default MyList;
