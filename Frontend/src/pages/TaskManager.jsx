import React, { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TaskCards from "./TaskCards";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);

  const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]); // Add new task to the state
  };

  return (
    <div>
      <AddTaskForm onTaskAdded={handleTaskAdded} />
      <TaskCards tasks={tasks} />
    </div>
  );
};

export default TaskManager;
