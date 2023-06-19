import PropTypes from "prop-types";

const ButtonState = () => {

    let count = 0;

    const handleClick = () => {
        count = count + 1;
        console.log("Button count: " + count);
    }
    return <button onClick={handleClick}>buttonstate: {count} </button>;
};

export default ButtonState;
