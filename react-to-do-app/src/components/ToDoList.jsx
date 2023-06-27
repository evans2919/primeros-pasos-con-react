/* eslint-disable react/prop-types */
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ ToDo, deleteToDo }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center my-5">Lista de tareas</h2>
      <ul className="list-group">
        {ToDo.map((ToDo) => (
          <ToDoListItem key={ToDo.id} ToDo={ToDo} deleteToDo={deleteToDo}></ToDoListItem>
        ))}
      </ul>
      {ToDo.length === 0 &&
        <ul className="list-group">
          <li className="list-group-item text-center">
            No existen tareas creadas
          </li>
      
      </ul>}
    </div>
  );
};

export default ToDoList;
