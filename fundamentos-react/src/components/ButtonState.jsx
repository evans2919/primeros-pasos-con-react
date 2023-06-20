import { useState } from "react";

const ButtonState = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => { 
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>Counter: { count }</button>
    ); 
    
    // return (
    //     <button onClick={() => setCount((count) => count + 1 )}>Counter: { count }</button>
    // );


}

export default ButtonState;
