import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const initialStateToDo = [
  {
    id: 1,
    name: "ToDo #1",
    description: "Description ToDo #1",
    priority: true,
    state: false,
  },
  {
    id: 2,
    name: "ToDo #2",
    description: "Description ToDo #2",
    priority: true,
    state: true,
  },
  {
    id: 3,
    name: "ToDo #3",
    description: "Description ToDo #3",
    priority: false,
    state: false,
  },
];

const App = () => {
  const [ToDo, setToDo] = useState(initialStateToDo);

  const addToDo = (newToDo) => {
    setToDo([...ToDo, newToDo]);
  };

  const deleteToDo = (id) => {
    const newArray = ToDo.filter((ToDo) => ToDo.id !== id);
    setToDo(newArray);
  };

  return (
    <div className="container mb-2">
      <h1 className="my-5">Crear nueva tarea</h1>

      <ToDoForm addToDo={addToDo}></ToDoForm>

      <ToDoList ToDo={ToDo} deleteToDo={deleteToDo}></ToDoList>
    </div>
  );
};

export default App;
