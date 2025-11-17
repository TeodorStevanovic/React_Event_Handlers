import React from "react";

const Myinput = (props) => {
  const changeInput = () => console.log("Change Input Value.");

  const changeBlur = () => console.log("Change Blur");

  return (
    <>
      <label>{props.children}</label>
      <input onChange={changeInput} onBlur={changeBlur} />
    </>
  );
};

export default Myinput;
