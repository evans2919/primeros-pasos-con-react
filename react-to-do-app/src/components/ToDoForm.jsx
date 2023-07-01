/* eslint-disable react/prop-types */
import { useState } from "react";
import Swal from "sweetalert2";


const ToDoForm = ({ createToDo }) => {

  const [newToDo, setNewToDo] = useState({
    title: "",
    description: "",
    priority: false,
    state: "",
  });
  const { title, description, priority, state } = newToDo;
    

  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Lo sentimos, todos los campos son obligatorios.",
      });
    }
    createToDo({
      id: Date.now(),
      ...newToDo,
      state: state === "procesado",
    });
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "¡Se ha añadido una nueva tarea!",
      showConfirmButton: false,
      timer: 1500,
    });

    setNewToDo({
      title: "",
      description: "",
      priority: false,
      state: "",
    });
    
  };

  const handleChange = (e) => {
    const { name, checked, value, type } = e.target;
    setNewToDo({ ...newToDo, [name]: type === "checkbox" ? checked : value });
  };

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Ingrese título de tarea"
            name="title"
            onChange={handleChange}
            value={title}
          />
          <label htmlFor="floatingInput">Ingrese título de tarea</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            style={{ height: 100 }}
            id="floatingTextarea"
            placeholder="Ingrese descripción de tarea"
            name="description"
            onChange={handleChange}
            value={description}
          />
          <label htmlFor="floatingTextarea">Ingrese descripción de tarea</label>
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            id="flexCheckIndeterminate"
            type="checkbox"
            name="priority"
            onChange={handleChange}
            checked={priority}
          />
          <label className="form-check-label" htmlFor="flexCheckIndeterminate">
            Tarea prioritaria
          </label>
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            id="floatingSelect"
            aria-label="Floating label select example"
            name="state"
            onChange={handleChange}
            value={state}
          >
            <option selected>Seleccione estado de tarea</option>
            <option value="pendiente">Pendiente</option>
            <option value="procesado">Procesado</option>
          </select>
          <label htmlFor="floatingSelect">Seleccione estado de tarea</label>
        </div>
        <button
          type="submit"
          data-bs-dismiss="modal"
          className="btn btn-primary"
        >
          Crear tarea
        </button>
      </form>
    </>
  );
};

export default ToDoForm;
