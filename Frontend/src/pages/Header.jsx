import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Assuming the token is stored in localStorage
  
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token on logout
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          {/* Custom Logo */}
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            <img src={logo} alt="Logo" style={{ height: "120px" }} />
            {/* Replace with your logo path */}
          </Typography>

          {/* Navigation Links with active styling */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({
                color: "#654F90",
                marginLeft: "20px",
                fontSize: "16px",
                textDecoration: isActive ? "underline" : "none", // Underline when active
              })}
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: "#654F90",
                marginLeft: "20px",
                fontSize: "16px",
                textDecoration: isActive ? "underline" : "none", // Underline when active
              })}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: "#654F90",
                marginLeft: "20px",
                fontSize: "16px",
                textDecoration: isActive ? "underline" : "none", // Underline when active
              })}
            >
              Contact
            </NavLink>

            {/* Conditionally render Register/Login or Logout */}
            {!token ? (
              <>
                <Button
                  color="inherit"
                  component={NavLink}
                  to="/register"
                  sx={{
                    backgroundColor: "#654F90",
                    marginLeft: "30px",
                    padding: "8px 16px",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  Register
                </Button>

                <Button
                  color="inherit"
                  component={NavLink}
                  to="/login"
                  sx={{
                    backgroundColor: "#FFB74D",
                    color: "#00000",
                    marginLeft: "20px",
                    padding: "8px 16px",
                    textDecoration: "underline",
                    "&:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: "#FFB74D",
                    },
                  }}
                >
                  Login
                </Button>
              </>
            ) : (
              <Button
                color="inherit"
                onClick={handleLogout}
                sx={{
                  backgroundColor: "#FF9B29",
                  marginLeft: "30px",
                  padding: "8px 16px",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
