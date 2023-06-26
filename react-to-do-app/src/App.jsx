import { useState } from "react";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const initialStateNewToDo = [
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
    priority: true,
    state: false,
  },
];

const App = () => {
  const [newToDo, setNewToDo] = useState(initialStateNewToDo);
  
  const addToDo = (ToDo) => {
    setNewToDo([...newToDo, ToDo]);
  }
  
  return (
    <div className="container mb-2">
      <h1 className="my-5">Crear tarea</h1>
      <ToDoForm addToDo={addToDo}></ToDoForm>
      <ToDoList newToDo={newToDo}></ToDoList>
    </div>
  );
}

export default App;