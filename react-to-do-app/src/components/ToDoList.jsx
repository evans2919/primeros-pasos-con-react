/* eslint-disable react/prop-types */
import ToDoListItem from "./ToDoListItem";
const ToDoList = ({ toDo, updateToDo, deleteToDo }) => {
  return (
    <>
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
            No existen tareas creadas
          </li>
        </ul>
      )}
    </>
  );
};

export default ToDoList;
