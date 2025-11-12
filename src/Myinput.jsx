import React from "react";

const Myinput = () => {
    const onChange = () => {
        console.log("Change input value");
    }

    const onBlur = () => {
        console.log("Blured")
    }

    return (
        <input onChange={onChange} onBlur={onBlur} />
    )
};

export default Myinput;