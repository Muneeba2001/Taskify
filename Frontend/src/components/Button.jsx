import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({ children, onClick, color = "primary", className = "" }) => {
  return (
    <Button
      variant="contained"
      color={color}
      onClick={onClick}
      className={`w-full ${className}`}
      sx={{
        backgroundColor: '#654F90', 
        '&:hover': {
          backgroundColor: '#543A7B',
        },
        marginTop: '1rem',
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
