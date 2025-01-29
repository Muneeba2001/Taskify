import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskTable from '../components/TaskTable';
import TaskCards from './TaskCard';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks

  // Function to handle adding a new task
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]); // Add new task to the existing list of tasks
  };

  return (
    <div>
      {/* Form to add a new task */}
      <TaskForm onAddTask={handleAddTask} />

      {/* Task Cards Section */}
      <TaskCards tasks={tasks} />

      {/* Table to display tasks */}
      <TaskTable tasks={tasks} />
    </div>
  );
};

export default TaskManager;