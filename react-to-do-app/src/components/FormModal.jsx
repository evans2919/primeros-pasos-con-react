/* eslint-disable react/prop-types */
import ToDoForm from "./ToDoForm";
const FormModal = ({ createToDo }) => {
  return (
    <div
      className="modal fade"
      id="formModal"
      tabIndex="-1"
      aria-labelledby="formModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="formModalLabel">
              Crear nueva tarea
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <ToDoForm createToDo={createToDo}></ToDoForm>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FormModal;
