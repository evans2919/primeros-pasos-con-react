/* eslint-disable react/prop-types */
const ToDoListItem = ({ ToDo }) => {
  const { id, name, description, priority, state } = ToDo;
  return (
    <>
      <li className="list-group-item">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className={state && "text-decoration-line-through"}>{name}</h5>
            <p className={state && "text-decoration-line-through"}>
              {description}
            </p>
            <div className="d-flex gap-2">
              <button className="btn btn-sm btn-danger">Eliminar</button>
              <button className="btn btn-sm btn-warning">Actualizar</button>
            </div>
          </div>
          {priority && <span className="badge bg-primary">Prioritario</span>}
        </div>
      </li>
    </>
  );
};

export default ToDoListItem;
