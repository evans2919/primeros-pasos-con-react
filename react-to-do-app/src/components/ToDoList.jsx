const ToDoList = ({ newToDo }) => {
  return (
    <div className="mt-5">
      <h2 className="text-center">Lista de tareas</h2>
      <ul className="list-group">
        {newToDo.map((newToDo) => (
          <li key={newToDo.id} className="list-group-item">
            {newToDo.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
