import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Typography, Card, CardContent } from "@mui/material";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the user session (remove token from localStorage)
    localStorage.removeItem("token");

    // Redirect the user to the login page after logout
    navigate("/login");
  }, [navigate]);

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#FFB74D] to-[#654F90]">
      <Card
        className="max-w-md mx-auto p-6 my-10"
        sx={{ backgroundColor: "white", borderRadius: "10px", boxShadow: 3 }}
      >
        <CardContent>
          <Typography variant="h5" className="text-center mb-10" sx={{ color: "#654F90" }}>
            You have been logged out
          </Typography>
          <Typography variant="body1" className="text-center mb-6">
            You have successfully logged out.
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#FF9B29",
              "&:hover": { backgroundColor: "#FF9B29" },
              color: "white",
            }}
            onClick={() => navigate("/login")}
          >
            Go to Login Page
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Logout;
