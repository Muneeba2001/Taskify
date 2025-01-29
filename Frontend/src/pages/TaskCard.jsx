import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Modal,
  Button,
} from "@mui/material";
import AddTask from "./AddTask";
import TaskTable from "../components/TaskTable"; // Import the TaskTable component

const TaskCards = ({ tasks, onClickTask }) => {
  const [open, setOpen] = useState(false); // State to manage modal visibility
  const [selectedTask, setSelectedTask] = useState(null); // State to store the clicked task

  const handleClickStatus = (task) => {
    setSelectedTask(task); // Set the clicked task
    setOpen(true); // Open the modal
  };

  const handleClose = () => {
    setOpen(false); // Close the modal
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <Typography
        variant="h5"
        sx={{ textAlign: "center", color: "#654F90", marginBottom: "20px" }}
      >
        Weekly Tasks
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
      >
        <AddTask />
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {tasks.map((task, index) => (
          <Grid item xs={12} sm={4} md={2} key={index}>
            <Card
              sx={{
                minHeight: "150px",
                borderRadius: "10px",
                backgroundColor: "#fff",
                boxShadow: 3,
              }}
            >
              <CardContent
                sx={{ textAlign: "center", padding: "16px" }}
                onClick={() => onClickTask(task)}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", marginBottom: "10px" }}
                >
                  {task.day}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                  {task.title}
                </Typography>
                <Box
                  sx={{
                    display: "inline-block",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    backgroundColor:
                      task.status === "Completed"
                        ? "#4caf50"
                        : task.status === "In Progress"
                        ? "#FF9B29"
                        : "#FF5722",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the card click from firing
                    handleClickStatus(task); // Handle click on status box
                  }}
                >
                  {task.status}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Task Report with TaskTable */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: 3,
            width: "80%",
            maxWidth: "600px",
            overflowY: "auto",
            maxHeight: "90vh",
          }}
        >
          {selectedTask && (
            <div>
              <Typography
                variant="h6"
                sx={{ marginBottom: "10px", fontWeight: "bold" }}
              >
                Task Report
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                <strong>Title:</strong> {selectedTask.task}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                <strong>Description:</strong> {selectedTask.task}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "10px" }}>
                <strong>Status:</strong> {selectedTask.status}
              </Typography>
              <Typography variant="body1" sx={{ marginBottom: "20px" }}>
                <strong>Due Date:</strong> {selectedTask.schedule}
              </Typography>

              {/* Task Table inside the modal */}
              <TaskTable tasks={[selectedTask]} />

              <Button
                variant="contained"
                sx={{ backgroundColor: "#654F90", marginTop: "10px" }}
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
};

export default TaskCards;
