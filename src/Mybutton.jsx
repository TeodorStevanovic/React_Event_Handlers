import React from "react";

const Mybutton = (props) => {
  const clickHandler = () => {
    console.log("Clicked");
  };

  return <button onClick={clickHandler}>{props.children}</button>;
};

export default Mybutton;
