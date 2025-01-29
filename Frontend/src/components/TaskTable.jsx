import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const TaskTable = ({ tasks }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <Typography variant="h5" sx={{ textAlign: 'center', color: '#654F90', marginBottom: '20px' }}>
        Weekly Tasks Table
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Day</strong></TableCell>
              <TableCell><strong>Title</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Priority</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => (
              <TableRow key={index}>
                <TableCell>{task.day}</TableCell>
                <TableCell>{task.task}</TableCell>
                <TableCell>
                  <span
                    style={{
                      padding: '4px 12px',
                      borderRadius: '20px',
                      backgroundColor: task.status === 'Completed' ? '#4caf50' :
                        task.status === 'In Progress' ? '#FF9B29' : '#FF5722',
                      color: '#fff',
                    }}
                  >
                    {task.status}
                  </span>
                </TableCell>
                <TableCell>{task.priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TaskTable;
