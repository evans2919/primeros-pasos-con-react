/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { useState } from "react";

const ToDoForm = ({ addToDo }) => {
  // const [error, setError] = useState("");

  const [newToDo, setNewToDo] = useState({
    name: "",
    description: "",
    priority: true,
    state: "procesado",
  });

  const { name, description, priority, state } = newToDo;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Título y descripción obligatorios.",
      });
    }

    addToDo({
      id: Date.now(),
      ...newToDo,
      state: state === "procesado" ? true : false,
    });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Tarea creada ",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setNewToDo({ ...newToDo, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese nombre de tarea"
        className="form-control mb-2"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <textarea
        placeholder="Ingrese descripción de tarea"
        className="form-control mb-2"
        name="description"
        value={description}
        onChange={handleChange}
      />
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          name="priority"
          id="inputCheck"
          checked={priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Prioritaria</label>
      </div>

      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={handleChange}
      >
        <option>Elija una opción</option>
        <option value="pendiente">Pendiente</option>
        <option value="procesado">Procesado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Agregar tarea
      </button>
    </form>
  );
};

export default ToDoForm;
