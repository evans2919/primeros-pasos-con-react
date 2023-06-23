import { useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("pendiente");

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
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Ingrese descripción"
        className="form-control mb-2"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className="form-select mb-2"
        name="state"
        value={state}
        onChange={(e) => setState(e.target.value)}
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
