import { useRef, useState } from "react";

const NotControlledForm = () => {
  const form = useRef(null);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    //Capturar los datos

    const data = new FormData(form.current);
    const { name, description, state } = Object.fromEntries([
      ...data.entries()
    ]);

    //Validar los datos

    if (!name.trim() || !description.trim() || !state.trim()) {
      setError("Todos los campos son obligatorios.");
    }
    // Resetear formulario 
    form.current.reset();
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese ToDo"
        className="form-control mb-2"
        name="name"
        defaultValue="ToDo #1"
      />
      <textarea
        placeholder="Ingrese descripción"
        className="form-control mb-2"
        name="description"
        defaultValue="Descripción #1"
      />
      <select
        className="form-select mb-2"
        name="state"
        defaultValue="procesado"
      >
        <option>Elija una opción</option>
        <option value="pendiente">Pendiente</option>
        <option value="procesado">Procesado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      <br></br>
      {error !== "" && error}
    </form>
  );
};

export default NotControlledForm;
