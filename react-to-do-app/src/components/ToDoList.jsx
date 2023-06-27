import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ ToDo }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center">Lista de tareas</h2>
      <ul className="list-group">
        {ToDo.map((ToDo) => (
          <ToDoListItem key={ToDo.id} ToDo={ToDo}></ToDoListItem>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
