import React from "react";

const MyButton = (props) => {
  const checkedBtn = () => {console.log("Checked.")};

  return (
    <button onClick={checkedBtn}>{props.children}</button>
  )
};

export default MyButton;
