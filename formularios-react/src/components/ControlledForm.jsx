import { useState } from "react";

const ControlledForm = () => {
  const [error, setError] = useState("");

  const [ToDo, setToDo] = useState({
    name: "",
    description: "",
    priority: true,
    state: "procesado",
  });

  const { name, description, priority, state } = ToDo;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!name.trim() || !description.trim()) {
      setError("Todos los campos son obligatorios.");
    }
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setToDo({ ...ToDo, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error !== "" && (
        <>
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </>
      )}
      <input
        type="text"
        placeholder="Ingrese ToDo"
        className="form-control mb-2"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <textarea
        placeholder="Ingrese descripción"
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
        <label htmlFor="inputCheck">Prioritario</label>
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
        Procesar
      </button>
    </form>
  );
};

export default ControlledForm;
