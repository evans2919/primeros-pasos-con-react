import imgUno from "./assets/images/img-1.jpg";
import PropTypes from "prop-types";

const MyButton = ({ title, number }) => {

    const handleClick = () => console.log("Haz hecho clic!");
    
return (
    <button onClick={handleClick}>
      {title} {number}
    </button>
  );
};

MyButton.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

const AllFruits = ({ listFruits }) => {
  return <li> {listFruits} </li>;
};

AllFruits.propTypes = {
  listFruits: PropTypes.string.isRequired,
};

const WelcomeText = ({ user }) => (
  <h1> {user ? "Online user" : "Offline user"}</h1>
);

WelcomeText.propTypes = {
  user: PropTypes.bool.isRequired,
};

const App = () => {
  const projectName = "Mi primer proyecto con REACT";
  const classTitle = "text-center";
  const classColor = {
    info: "color-info",
    warning: "color-warning",
  };

  const fruits = ["🍊", "🍌", "🍍", "🥭", "🍓"];

  const user = true;

  return (
    <>
      <h1 className={`${classTitle} ${classColor.info}`}>{projectName}</h1>
      <img src={imgUno} />

      <MyButton title="Buenos días" number={25}></MyButton>

      <WelcomeText user={user} />

      <ul>
        {fruits.map((fruit, index) => (
          <AllFruits key={index} listFruits={fruit} />
        ))}
      </ul>
    </>
  );
};

export default App;
