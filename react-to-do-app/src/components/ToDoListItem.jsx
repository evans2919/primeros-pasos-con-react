/* eslint-disable react/prop-types */
const ToDoListItem = ({ toDo, updateToDo, deleteToDo }) => {
  const { id, title, description, priority, state } = toDo;
  return (
    <>
      <div className="bg-body rounded">
        <div className="d-flex shadow p-3 mb-3 justify-content-between align-items-start rounded">
          <div className="d-flex flex-column">
            <div>
              <h5 className={state && "text-decoration-line-through"}>
                {title}
              </h5>
            </div>
            <div>
              <p className={state && "text-decoration-line-through"}>
                {description}
              </p>
            </div>

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
          <div className="d-flex gap-2">
            <div>
              {state && (
                <span className="badge rounded-pill text-bg-success">
                  Completada
                </span>
              )}
            </div>
            <div>
              {priority && (
                <span className="badge rounded-pill text-bg-primary">
                  Prioritaria
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoListItem;
