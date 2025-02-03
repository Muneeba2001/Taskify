import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import ReportGraph from "../components/ReportGraph";
import TaskCards from "./TaskCard";
import TaskModal from "./TaskModel";
import AddTask from "./AddTask";
import axios from "axios";
import TaskTable from "../components/TaskTable";
import TaskForm from "./TaskForm";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    } else {
      // Fetch tasks from the server if not in localStorage
      axios
        .get("http://localhost:3004/tasks")
        .then((response) => {
          setTasks(response.data);
          localStorage.setItem("tasks", JSON.stringify(response.data));
        })
        .catch((error) => {
          console.error("Error fetching tasks:", error);
        });
    }
  }, []);

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
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleUpdateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save updated tasks
    setTaskToEdit(null); // Reset taskToEdit after update
  };

  return (
    <div>
      {/* Graph Section */}
      <ReportGraph tasks={tasks} />

      {/* Add Task Section */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
      >
        <AddTask onAddTask={handleAddTask} />
      </Box>

      {/* Show Task Form when editing a task */}
      {taskToEdit && (
        <TaskForm
          taskToEdit={taskToEdit}
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
        />
      )}

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
