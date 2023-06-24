import { useState } from "react";

const Cat = () => {
    const [cat, setCat] = useState({
        name: "Juan",
        year: 3,
    })

    const handleClick = () => {
        setCat({ ...cat, year: cat.year + 1 });
        // setCat((prev) => ({ ...prev, year: cat.year + 1}));
    }
    
    return (
      <>
        <h1>
          {cat.name} {cat.year}
        </h1>
        <button className = "btn btn-info" onClick={handleClick}>Change year</button>
      </>
    );
}
export default Cat;
