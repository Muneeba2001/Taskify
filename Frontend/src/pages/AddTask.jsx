import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import TaskForm from './TaskForm';

const AddTask = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = (newTask) => {
    // Add the task to your task list (you can update state here if needed)
    console.log('New task added:', newTask);
    setOpen(false);  // Close the pop-up after task is added
  };

  return (
    <div>
      {/* Add Task Button */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        sx={{ margin: '20px' }}
      >
        Add Task
      </Button>

      {/* Dialog for Adding Task */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <TaskForm onAddTask={handleAddTask} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddTask;
