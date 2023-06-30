import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

const initialStateToDo = JSON.parse(localStorage.getItem("toDo")) || [];
const App = () => {
  const [toDo, setToDo] = useState(initialStateToDo);
  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
  }, [toDo]);

  const createToDo = (newToDo) => {
    setToDo([...toDo, newToDo]);
  };
  const updateToDo = (id) => {
    const newArray = toDo.map((toDo) => {
      if (toDo.id === id) {
        toDo.state = !toDo.state;
      }
      return toDo;
    });
    setToDo(newArray);
  };
  const deleteToDo = (id) => {
    const newArray = toDo.filter((toDo) => toDo.id !== id);

    Swal.fire({
      title: "¿Estás seguro de eliminar la tarea?",
      text: "¡No podrás recuperarla!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, elimínala",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Eliminada!",
          text: "La tarea ha sido eliminada.",
          icon: "success",
          timer: 1500,
        });
        setToDo(newArray);
      }
    });
  };

   const orderToDo = (arrayToDo) => {
     return arrayToDo.sort((a, b) => {
       if (a.priority === b.priority) return 0;
       if (a.priority) return -1;
       if (!a.priority) return 1;
     });
   };

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-5">Crear nueva tarea</h2>
        <ToDoForm createToDo={createToDo}></ToDoForm>
        <h2 className="my-5 text-center">Lista de tareas</h2>
        <ToDoList
          toDo={orderToDo(toDo)}
          updateToDo={updateToDo}
          deleteToDo={deleteToDo}
        ></ToDoList>
      </div>
    </>
  );
};

export default App;
