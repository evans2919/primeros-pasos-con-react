import imgUno from "./assets/images/img-1.jpg";
import PropTypes from "prop-types";
import MyButton from "./components/MyButton";

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

      <MyButton title="Button " number={1}></MyButton>
      <MyButton title="Button " number={2}></MyButton>
      <MyButton title="Button " number={3}></MyButton>

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
