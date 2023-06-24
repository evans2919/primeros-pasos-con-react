import { useState } from "react";

const ControlledForm = () => {
  const [ToDo, setToDo] = useState({
    name: "",
    description: "",
    state: "pendiente",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setToDo({
      ...ToDo,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese ToDo"
        className="form-control mb-2"
        name="name"
        value={ToDo.name}
        onChange={handleChange}
      />
      <textarea
        placeholder="Ingrese descripción"
        className="form-control mb-2"
        name="description"
        value={ToDo.description}
        onChange={handleChange}
      />
      <select
        className="form-select mb-2"
        name="state"
        value={ToDo.state}
        onChange={handleChange}
      >
        <option>Elija una opción</option>
        <option value="pendiente">Pendiente</option>
        <option value="procesado">Procesado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
    </form>
  );
};

export default ControlledForm;
