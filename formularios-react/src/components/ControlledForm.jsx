import { useState } from "react";

const ControlledForm = () => {
  const [ToDo, setToDo] = useState({
    name: "",
    description: "",
    state: "pendiente",
    priority: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {

    const { name, type, checked, value } = e.target;

    setToDo({
      ...ToDo, [name]: type === "checkbox" ? checked : value,
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
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          name="priority"
          id="inputCheck"
          checked={ToDo.priority}
          onChange={handleChange}
        />
        <label htmlFor="inputCheck">Prioritario</label>
      </div>

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
