/* eslint-disable react/prop-types */
const ToDoListItem = ({ ToDo, deleteToDo, updateToDo }) => {
  const { id, name, description, priority, state } = ToDo;
  return (
    <>
      <li className="list-group-item my-2 shadow p-3 bg-body rounded">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className={state && "text-decoration-line-through"}>{name}</h5>
            <p className={state && "text-decoration-line-through"}>
              {description}
            </p>
            <div className="d-flex gap-2">
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteToDo(id)}
              >
                Eliminar
              </button>
              <button className="btn btn-sm btn-warning" onClick={() => updateToDo(id)}>Actualizar</button>
            </div>
          </div>
          {priority && <span className="badge bg-primary">Prioritario</span>}
        </div>
      </li>
    </>
  );
};

export default ToDoListItem;
