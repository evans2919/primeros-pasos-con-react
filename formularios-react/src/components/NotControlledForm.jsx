import { useRef } from "react";

const NotControlledForm = () => {

    const form = useRef(null);
    const handleSubmit = (e) => { 
        e.preventDefault();
        console.log(form.current);
        console.log("Me tocaste")
    }

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese ToDo"
        className="form-control mb-2"
        name="name"
      />
      <textarea
        placeholder="Ingrese descripción"
        className="form-control mb-2"
        name="description"
      />
      <select
        className="form-select mb-2"
        defaultValue="completado"
        name="state"
      >
        <option value="">Elija una opción</option>
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
