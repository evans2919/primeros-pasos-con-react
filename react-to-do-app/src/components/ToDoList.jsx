/* eslint-disable react/prop-types */
import ToDoListItem from "./ToDoListItem";
import ToDoListActions from "./ToDoListActions";
const ToDoList = ({
  toDo,
  updateToDo,
  deleteToDo,
  deleteAll,
  deleteCompleted,
}) => {
  return (
    <>
      <h2 className="mt-5 text-center">Lista de tareas</h2>
      <ToDoListActions
        deleteAll={deleteAll}
        deleteCompleted={deleteCompleted}
        toDo={toDo}
      ></ToDoListActions>

      <ul className="list-group">
        {toDo.map((toDo) => (
          <ToDoListItem
            key={toDo.id}
            toDo={toDo}
            updateToDo={updateToDo}
            deleteToDo={deleteToDo}
          ></ToDoListItem>
        ))}
      </ul>
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
