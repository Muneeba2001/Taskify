import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import TaskForm from './TaskForm';

const AddTask = ({onAddTask}) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddTask = (newTask) => {
    onAddTask(newTask); 
    console.log("Task added to parent:", newTask);
    setOpen(false);
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
