import React, { useState } from "react";
import { Button, TextField, Box, MenuItem } from "@mui/material";
import axios from "axios";

const AddTaskForm = ({ onTaskAdded }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    status: "pending",
    priority: "medium",
    dueDate: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3004/create", task, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });

      onTaskAdded(response.data);
      setTask({ title: "", description: "", status: "pending", priority: "medium", dueDate: "" });
    } catch (error) {
      console.error("Error adding task:", error.response?.data || error.message);
    }
  };

  return (
    <Box sx={{ maxWidth: "500px", margin: "20px auto" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          name="title"
          value={task.title}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: "10px" }}
        />
        <TextField
          label="Description"
          name="description"
          value={task.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={3}
          sx={{ marginBottom: "10px" }}
        />
        <TextField
          label="Due Date"
          name="dueDate"
          type="date"
          value={task.dueDate}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={{ marginBottom: "10px" }}
        />
        <TextField
          select
          label="Status"
          name="status"
          value={task.status}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: "10px" }}
        >
          <MenuItem value="pending">Pending</MenuItem>
          <MenuItem value="in-progress">In Progress</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </TextField>
        <TextField
          select
          label="Priority"
          name="priority"
          value={task.priority}
          onChange={handleChange}
          fullWidth
          sx={{ marginBottom: "10px" }}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </TextField>
        <Button type="submit" variant="contained" color="primary">
          Add Task
        </Button>
      </form>
    </Box>
  );
};

export default AddTaskForm;
