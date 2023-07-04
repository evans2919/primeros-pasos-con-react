/* eslint-disable react/prop-types */
const ToDoListActions = ({ toDo, deleteAll, deleteCompleted }) => {
  return (
    <>
      {toDo.length >= 1 && (
        <div className="d-flex justify-content-between my-5">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-success dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Acciones
            </button>
            <ul className="dropdown-menu" style={{ width: 200 }}>
              <li>
                {toDo.filter((toDo) => toDo.state).length >= 1 && (
                  <>
                    <div className="d-flex">
                      <button
                        className="btn text-success"
                        onClick={() => deleteCompleted()}
                      >
                        Eliminar completadas
                      </button>
                    </div>
                  </>
                )}
              </li>
              <li>
                <button className="btn text-danger" onClick={() => deleteAll()}>
                  Eliminar todas las tareas
                </button>
              </li>
            </ul>
          </div>
          <div>
            <p>Tareas creadas: {toDo.length}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ToDoListActions;
