import React, { useState } from "react";
import {
  TextField,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import CustomButton from "../components/Button";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login submission logic here
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log("Continue with Gmail clicked");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#FFB74D] to-[#654F90]">
      {" "}
      {/* Gradient applied to the background */}
      <Card
        className="max-w-md mx-auto p-6 my-10"
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            className="text-center mb-10"
            sx={{ color: "#654F90" }}
          >
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />
            <CustomButton type="submit" sx={{ margin: "16px" }}>
              Login
            </CustomButton>
            {/* Google Sign-In Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#FF9B29",
                "&:hover": { backgroundColor: "#FF9B29" },
                color: "white",
                marginTop: "16px",
                marginBottom: "16px",
              }}
              onClick={handleGoogleSignIn}
            >
              Continue with Google account
            </Button>
            <p className="text-center">
              Don't have an account?
              <Link
                className="p-1 underline cursor-pointer text-blue-700"
                to="/register"
              >
                Register
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
