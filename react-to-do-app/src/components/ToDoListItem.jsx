/* eslint-disable react/prop-types */
const ToDoListItem = ({ toDo, updateToDo, deleteToDo }) => {
  const { id, title, description, priority, state } = toDo;
  return (
    <>
      <div className="col-lg-4 col-md-6 bg-body rounded">
        <div className="d-flex shadow p-3 mb-3 justify-content-between align-items-start">
          <div className="d-flex flex-column">
            <h5 className={state && "text-decoration-line-through"}>{title}</h5>
            <p className={state && "text-decoration-line-through"}>
              {description}
            </p>
            <div className="d-flex gap-2">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteToDo(id)}
              >
                Eliminar
              </button>
              <button
                className="btn btn-warning btn-sm"
                onClick={() => updateToDo(id)}
              >
                Actualizar
              </button>
            </div>
          </div>
          <div>
            {priority && (
              <span className="badge rounded-pill text-bg-primary">
                Prioridad
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoListItem;
