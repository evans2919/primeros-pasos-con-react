import imgUno from "./assets/images/img-1.jpg";
import MyButton from "./components/MyButton";
import DefaultList from "./components/DefaultList";
import WelcomeMessage from "./components/WelcomeMessage";

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

      <WelcomeMessage user={user} />

      <ul>
        {fruits.map((fruit, index) => (
          <DefaultList key={index} list={fruit} />
        ))}
      </ul>
    </>
  );
};

export default App;
