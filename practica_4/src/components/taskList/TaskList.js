import "./TaskList.css";

const TaskList = ({ prevTasks, setPrevTask }) => {
  const deleteTaskHandler = (index) => {
    setPrevTask(prevTasks.filter((TASK, i) => i !== index));
  };

  const taskCompletedHandler = (index) => {
    const newTaskList = [...prevTasks];
    newTaskList[index].completed = !newTaskList[index].completed;
    setPrevTask(newTaskList);
  };

  const listTask = prevTasks.map((TASK, index) => (
    <div
      className="task-item"
      key={index}
      style={{
        textDecoration: TASK.completed ? "line-through" : "none",
      }}
    >
      <h3>{TASK.taskName}</h3>
      <button onClick={() => taskCompletedHandler(index)}>
        {!TASK.completed ? "Completada" : "Desmarcar"}
      </button>
      <button onClick={() => deleteTaskHandler(index)}>Borrar</button>
    </div>
  ));

  const tasksEmpty = prevTasks.length === 0 ? true : false;

  return (
    <div>
      {!tasksEmpty && (
        <div>
          <h2>Lista de Tareas:</h2>
          {listTask}
        </div>
      )}
      {tasksEmpty && <h3>No cuenta con tareas asignadas</h3>}
    </div>
  );
};

export default TaskList;
