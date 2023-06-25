import { useState } from "react";

const Cat = () => {
  const [cat, setCat] = useState({
    name: "Alberto",
    year: 1
  });

  const { name, year } = cat;

  const handleClick = () => {
    setCat({ ...cat, year: year + 1 });
  }
  
  return (
    <>
      <h1>{name} {year}</h1>
      <button className="btn btn-info" onClick={handleClick}>Change year</button>
    
    </>
  )

}
export default Cat;
