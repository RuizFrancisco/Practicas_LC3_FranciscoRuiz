import "./TaskForm.css";

const TaskForm = ({ addTaskHandler, setTask, task }) => {
  const taskHandler = (event) => {
    setTask(event.target.value);
  };

  return (
    <div className="style-form">
      <div>
        <h1>Agregar nueva tarea</h1>
        <input type="text" value={task} onChange={taskHandler} />
        <button onClick={addTaskHandler}>Agregar</button>
      </div>
    </div>
  );
};

export default TaskForm;
