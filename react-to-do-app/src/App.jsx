import { useEffect, useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const initialStateToDo = [];

const App = () => {
  const [ToDo, setToDo] = useState(initialStateToDo);
  
  const addToDo = (newToDo) => {
    setToDo([...ToDo, newToDo]);
  };

  const deleteToDo = (id) => {
    const newArray = ToDo.filter((ToDo) => ToDo.id !== id);
    setToDo(newArray);
  };

  const updateToDo = (id) => {
    const newArray = ToDo.map((ToDo) => {
      return ToDo.id === id ? { ...ToDo, state: !ToDo.state } : ToDo;
    });

    setToDo(newArray);
  };

  const orderToDo = (arrayToDo) => {
    return arrayToDo.sort((a, b) => {
      if (a.priority === b.priority) return 0;
      if (a.priority) return -1;
      if (!a.priority) return 1;
    });
  };

  return (
    <div className="container mb-2">
      <h1 className="my-5">Crear nueva tarea</h1>

      <ToDoForm addToDo={addToDo}></ToDoForm>

      <ToDoList
        ToDo={orderToDo(ToDo)}
        deleteToDo={deleteToDo}
        updateToDo={updateToDo}
      ></ToDoList>
    </div>
  );
};

export default App;
