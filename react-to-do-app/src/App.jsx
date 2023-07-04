import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import FormModal from "./components/FormModal";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";

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

  const deleteAll = () => {
    Swal.fire({
      title: "¿Estás seguro de querer eliminar <b>TODAS</b> las tareas?",
      text: "¡No podrás recuperarlas!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, elimínalas",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "¡Tareas eliminadas!",
          text: "Las tareas han sido eliminadas.",
          icon: "success",
          timer: 1500,
        });
        setToDo([]);
      }
    });
  };

  const deleteCompleted = () => {
    const newArray = toDo.filter((toDo) => toDo.state !== true);
    setToDo(newArray);
     Swal.fire({
       title: "¡Tareas completadas eliminadas!",
       text: "Las tareas completadas han sido eliminadas.",
       icon: "success",
       timer: 1500,
     });
  };

  return (
    <>
      <Header></Header>
      <div className="container mt-5">
        <button
          type="button"
          className="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#formModal"
          data-bs-whatever="@mdo"
        >
          Crear nueva tarea
        </button>

        <FormModal createToDo={createToDo}></FormModal>

        <ToDoList
          deleteAll={deleteAll}
          deleteCompleted={deleteCompleted}
          toDo={orderToDo(toDo)}
          updateToDo={updateToDo}
          deleteToDo={deleteToDo}
        ></ToDoList>
      </div>
    </>
  );
};

export default App;
