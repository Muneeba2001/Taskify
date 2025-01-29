import React from 'react';
import { Container, Typography, Box, Grid, Avatar, Paper } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ padding: '40px 0' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#654F90', marginBottom: '20px' }}>
        About Me
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar
            alt="Your Name"
            src="https://i.pinimg.com/736x/63/03/10/630310f8e2b3c5d1e73776e7893dade6.jpg" 
            sx={{ width: 150, height: 150 }}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ padding: '20px', backgroundColor: '#f5f5f5', boxShadow: 3 }}>
            <Typography variant="h5" sx={{ color: '#654F90', marginBottom: '15px' }}>
              Hello, I'm Muneeba Waseem
            </Typography>
            <Typography variant="body1" paragraph>
              I am a passionate web developer with a love for creating modern, responsive, and user-friendly web applications.
              With a strong background in JavaScript, React, and various other modern web technologies, I aim to develop solutions that enhance the user experience and solve real-world problems.
            </Typography>
            <Typography variant="body1" paragraph>
              I am continuously learning new skills and tools to stay up-to-date with the ever-evolving world of web development. If you'd like to know more about my projects or have a collaboration idea, feel free to reach out!
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
