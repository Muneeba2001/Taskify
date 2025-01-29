import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#654F90', color: '#fff', paddingTop: '20px', paddingBottom: '20px', marginTop: '30px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {/* Left Side: Copyright and Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>Taskiy</Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              <Link href="/dashboard" color="inherit">Home</Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              <Link href="/about" color="inherit">About Us</Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              <Link href="/contact" color="inherit">Contact</Link>
            </Typography>
            <Typography variant="body2">
              © {new Date().getFullYear()} Taskify All Rights Reserved.
            </Typography>
          </Grid>

          {/* Center: Useful Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>Useful Links</Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              <Link href="/terms" color="inherit">Terms & Conditions</Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              <Link href="/privacy" color="inherit">Privacy Policy</Link>
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '8px' }}>
              <Link href="/faq" color="inherit">FAQ</Link>
            </Typography>
          </Grid>

          {/* Right Side: Social Media Links */}
          <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ marginBottom: '10px' }}>Follow Us</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton href="https://facebook.com" target="_blank" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton href="https://twitter.com" target="_blank" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton href="https://linkedin.com" target="_blank" color="inherit">
                <LinkedIn />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
