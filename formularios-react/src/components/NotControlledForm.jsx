import { useRef } from "react";

const NotControlledForm = () => {

  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(form.current);
    console.log([...data.entries()]);
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
        defaultValue="Description #1"
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
    </form>
  );
};

export default NotControlledForm;
