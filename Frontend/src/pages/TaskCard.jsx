import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';

const TaskCards = ({ tasks, handleClickOpen }) => {
  return (
    <Box sx={{ flexGrow: 1, padding: '20px' }}>
      {tasks.length === 0 ? (
        <Typography>No tasks available.</Typography>
      ) : (
        <Grid container spacing={2}>
          {tasks.map((task, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{ width: '100%', cursor: 'pointer' }}
                onClick={() => handleClickOpen(task)}
              >
                <CardContent>
                  <Typography variant="h6">{task.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {task.description}
                  </Typography>
                  <Box sx={{ marginTop: '10px' }}>
                    <Typography variant="body2" color="textSecondary">
                      <span
                        style={{
                          padding: '4px 12px',
                          borderRadius: '5px',
                          backgroundColor: task.status === 'completed' ? '#4caf50' :
                            task.status === 'in-progress' ? '#FF9B29' : '#FF5722',
                          color: '#fff',
                        }}
                      >
                        {task.status}
                      </span>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TaskCards;