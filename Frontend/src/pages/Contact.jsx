import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box, Paper } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process the form data here, e.g., send it to an API
    console.log('Name:', name, 'Email:', email, 'Message:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Container maxWidth="lg" sx={{ padding: '40px 0' }}>
      <Typography variant="h3" sx={{ textAlign: 'center', color: '#654F90', marginBottom: '20px' }}>
        Contact Me
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '20px', backgroundColor: '#f5f5f5', boxShadow: 3 }}>
            <Typography variant="h5" sx={{ color: '#654F90', marginBottom: '20px' }}>
              Get in Touch
            </Typography>
            <Typography variant="body1" paragraph>
              Feel free to drop me a message, and I'll get back to you as soon as possible. I'm always open to new opportunities and collaborations.
            </Typography>
            <Box sx={{ marginTop: '20px' }}>
              <Typography variant="body1">Email: example@example.com</Typography>
              <Typography variant="body1">Phone: (123) 456-7890</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '20px', backgroundColor: '#f5f5f5', boxShadow: 3 }}>
            <Typography variant="h5" sx={{ color: '#654F90', marginBottom: '20px' }}>
              Send a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Your Name"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ marginBottom: '20px' }}
                required
              />
              <TextField
                label="Your Email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ marginBottom: '20px' }}
                required
                type="email"
              />
              <TextField
                label="Your Message"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{ marginBottom: '20px' }}
                required
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" fullWidth type="submit">
                Send Message
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
