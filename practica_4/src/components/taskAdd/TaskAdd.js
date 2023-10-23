import React from "react";
import TaskForm from "../taskForm/TaskForm";
import { useState } from "react";

const TaskAdd = ({ prevTasks, setPrevTask }) => {
  const [task, setTask] = useState("");

  const addTaskHandler = () => {
    if (task.trim() !== "") {
      setPrevTask([{ taskName: task, completed: false }, ...prevTasks]);
      setTask("");
    } else {
      alert("Ingrese el nombre de su tarea");
    }
  };

  return (
    <TaskForm addTaskHandler={addTaskHandler} setTask={setTask} task={task} />
  );
};

export default TaskAdd;
