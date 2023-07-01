/* eslint-disable react/prop-types */
import ToDoListItem from "./ToDoListItem";
const ToDoList = ({ toDo, updateToDo, deleteToDo, deleteAll }) => {
  return (
    <>
      <h2 className="mt-5 text-center">Lista de tareas</h2>
      {toDo.length > 0 && (
        <div className="d-flex justify-content-end my-5">
          <div>
            <p>Tareas creadas: {toDo.length}</p>
            {toDo.length > 1 && (
              <button className="btn btn-danger" onClick={() => deleteAll()}>
                Eliminar todas las tareas
              </button>
            )}
          </div>
        </div>
      )}
      <div className="row">
        {toDo.map((toDo) => (
          <ToDoListItem
            key={toDo.id}
            toDo={toDo}
            updateToDo={updateToDo}
            deleteToDo={deleteToDo}
          ></ToDoListItem>
        ))}
      </div>
      {toDo.length === 0 && (
        <ul className="list-group">
          <li className="list-group-item shadow-sm p-3 mb-5 bg-body rounded text-center">
            Actualmente no existen tareas creadas.
          </li>
        </ul>
      )}
    </>
  );
};

export default ToDoList;
