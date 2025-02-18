import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import TaskTable from "../components/TaskTable"; // Assuming this is used for the task details table

const TaskModal = ({ open, selectedTask, handleClose }) => {
  const taskIdsArray = selectedTask ? [selectedTask.id] : [];

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
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
              <strong>Title:</strong> {selectedTask.title}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "10px" }}>
              <strong>Description:</strong> {selectedTask.description}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "10px"}}>
              <strong>Status:</strong> {selectedTask.status}
              <Box
                component="span"
                sx={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '5px',
                  backgroundColor:
                    selectedTask.status === 'completed'
                      ? '#4caf50'
                      : selectedTask.status === 'in-progress'
                      ? '#FF9B29'
                      : '#FF5722',
                  color: '#fff',
                  marginLeft: '10px',
                  whiteSpace: 'nowrap', // Prevent text from wrapping
                }}
              >
                {selectedTask.status}
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
              <strong>Due Date:</strong> {selectedTask.dueDate}
            </Typography>

            {/* Task Table inside the modal */}
            <TaskTable tasks={[selectedTask]} taskIds={taskIdsArray}/>

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
  );
};

export default TaskModal;
