import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const TaskModal = ({ open, task, onClose }) => (
  <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
    <DialogTitle>Task Details</DialogTitle>
    <DialogContent>
      {task && (
        <div>
          <Typography variant="h6">{task.task}</Typography>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>
            <strong>Day:</strong> {task.day}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>
            <strong>Schedule:</strong> {task.schedule}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: '10px' }}>
            <strong>Status:</strong> <span style={{ color: task.status === 'Completed' ? 'green' : task.status === 'In Progress' ? 'orange' : 'red' }}>{task.status}</span>
          </Typography>

          {/* Schedule Table */}
          <TableContainer component={Paper} sx={{ marginTop: '20px' }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><strong>Task</strong></TableCell>
                  <TableCell><strong>Time</strong></TableCell>
                  <TableCell><strong>Assigned To</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {task.scheduleDetails.map((schedule, index) => (
                  <TableRow key={index}>
                    <TableCell>{schedule.task}</TableCell>
                    <TableCell>{schedule.time}</TableCell>
                    <TableCell>{schedule.assignedTo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      )}
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Close
      </Button>
    </DialogActions>
  </Dialog>
);

export default TaskModal;
