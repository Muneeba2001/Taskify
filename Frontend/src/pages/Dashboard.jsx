import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ReportGraph from "../components/ReportGraph";
import TaskCards from "./TaskCard";
import TaskModal from "./TaskModel";
import AddTask from "./AddTask";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    console.log("Updated tasks in Dashboard:", tasks);
  }, [tasks]); // This will log tasks whenever they are updated

  const handleClickOpen = (task) => {
    setSelectedTask(task);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTask(null);
  };

  const handleAddTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks)); 
  };
  
  return (
    <div>
      {/* Graph Section */}
      <ReportGraph tasks={tasks} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <AddTask onAddTask={handleAddTask} />
      </Box>
      {/* Task Cards Section */}
      <TaskCards tasks={tasks} handleClickOpen={handleClickOpen} />

      {/* Task Details Modal (Pop-Up) */}
      <TaskModal
        open={open}
        selectedTask={selectedTask}
        handleClose={handleClose}
      />
    </div>
  );
};

export default Dashboard;