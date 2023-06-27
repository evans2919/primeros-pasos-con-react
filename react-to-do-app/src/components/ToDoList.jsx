const ToDoList = ({ ToDo }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center">Lista de tareas</h2>
      <ul className="list-group">
        {ToDo.map((ToDo) => (
          <li key={ToDo.id} className="list-group-item">
            {ToDo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
