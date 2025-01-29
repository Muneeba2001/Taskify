import React, { useState } from "react";
import ReportGraph from "../components/ReportGraph";
import TaskCards from "./TaskCard";
import TaskModal from "./TaskModel";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([
    {
      day: "Monday",
      task: "Task 1",
      status: "Completed",
      schedule: "9 AM - 11 AM",
    },
    {
      day: "Tuesday",
      task: "Task 2",
      status: "Pending",
      schedule: "10 AM - 12 PM",
    },
    {
      day: "Wednesday",
      task: "Task 3",
      status: "In Progress",
      schedule: "1 PM - 3 PM",
    },
    {
      day: "Thursday",
      task: "Task 4",
      status: "Completed",
      schedule: "9 AM - 12 PM",
    },
    {
      day: "Friday",
      task: "Task 5",
      status: "Pending",
      schedule: "2 PM - 4 PM",
    },
    {
      day: "Saturday",
      task: "Task 6",
      status: "In Progress",
      schedule: "11 AM - 1 PM",
    },
  ]);

  const handleClickOpen = (task) => {
    setSelectedTask(task);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTask(null);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      {/* Graph Section */}
      <ReportGraph />

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
