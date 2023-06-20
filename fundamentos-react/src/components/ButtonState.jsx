import PropTypes from "prop-types";
import { useState } from "react";

const ButtonState = () => {

    let count = 0;
    
    const arrayState = useState(0);
    console.log (arrayState);
    const stateNumber = arrayState[0];
    const stateFunction = arrayState[1];


    const handleClick = () => {
        // count = count + 1;
        // console.log("Button count: " + count);
        stateFunction(stateNumber + 1);
    }
    return <button onClick={handleClick}>buttonstate: {stateNumber} </button>;
};

export default ButtonState;
