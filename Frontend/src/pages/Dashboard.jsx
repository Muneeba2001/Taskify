import React, { useState, useContext } from 'react';
import { Box } from '@mui/material';
import ReportGraph from '../components/ReportGraph';
import TaskCards from './TaskCard';
import TaskModal from './TaskModel';
import AddTask from './AddTask';
import TaskTable from '../components/TaskTable';
import { TaskContext } from '../context/TaskContext';

const Dashboard = () => {
  const { tasks, addTask, updateTask, deleteTask } = useContext(TaskContext);
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleClickOpen = (task) => {
    setSelectedTask(task);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTask(null);
  };

  const handleEditTask = (task) => {
    setTaskToEdit(task);
  };

  return (
    <div>
      <ReportGraph tasks={tasks} />
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <AddTask onAddTask={addTask} />
      </Box>
      {taskToEdit && (
        <TaskForm taskToEdit={taskToEdit} onAddTask={addTask} onUpdateTask={updateTask} />
      )}
      <TaskCards tasks={tasks} handleClickOpen={handleClickOpen} />
      <TaskTable onEditTask={handleEditTask} />
      <TaskModal open={open} selectedTask={selectedTask} handleClose={handleClose} />
    </div>
  );
};

export default Dashboard;