import { useState } from "react";

const ControlledForm = () => {
  const [ToDo, setToDo] = useState({
    name: "",
    description: "",
    state: "pendiente",
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese ToDo"
        className="form-control mb-2"
        name="name"
        value={ToDo.name}
        onChange={(e) => setToDo({ ...ToDo, name: e.target.value })}
      />
      <textarea
        placeholder="Ingrese descripción"
        className="form-control mb-2"
        name="description"
        value={ToDo.description}
        onChange={(e) => setToDo({ ...ToDo, description: e.target.value })}
      />
      <select
        className="form-select mb-2"
        name="state"
        value={ToDo.state}
        onChange={(e) => setToDo({ ...ToDo, state: e.target.value })}
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
