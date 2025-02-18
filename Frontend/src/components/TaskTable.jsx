import React, { useContext, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskContext } from '../context/TaskContext';

const TaskTable = ({ onEditTask, taskIds = [] }) => {
  const { getTaskById, deleteTask } = useContext(TaskContext);
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    if (!taskIds || !Array.isArray(taskIds) || taskIds.length === 0) {
      console.log("No taskIds provided.");
      return; // Agar taskIds nahi hai toh API call mat karo
    }
  
    const fetchTasks = async () => {
      try {
        const tasksData = await Promise.all(taskIds.map((id) => getTaskById(id)));
        setFilteredTasks(tasksData.filter(task => task !== null)); 
      } catch (error) {
        console.error('Error fetching filtered tasks:', error);
      }
    };
  
    fetchTasks();
  }, [taskIds, getTaskById]);
  
  return (
    <div style={{ marginTop: '30px' }}>
      <Typography variant="h5" sx={{ textAlign: 'center', color: '#654F90', marginBottom: '20px' }}>
        Weekly Tasks Table
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Title</strong></TableCell>
              <TableCell><strong>Description</strong></TableCell>
              <TableCell><strong>Due Date</strong></TableCell>
              <TableCell><strong>Priority</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredTasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.dueDate}</TableCell>
                <TableCell>{task.priority}</TableCell>
                <TableCell sx={{ display: 'flex' }}>
                  <IconButton color="primary" onClick={() => onEditTask(task)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => deleteTask(task.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TaskTable;
