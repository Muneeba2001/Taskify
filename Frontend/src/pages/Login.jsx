import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
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
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 

    try {
      const response = await axios.post(
        "http://localhost:3004/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      navigate("/dashboard");
      // Handle successful login (e.g., save token, redirect)
      localStorage.setItem("token", response.data.token);

    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Try again.");
    }
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-In logic here
    console.log("Continue with Gmail clicked");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-[#FFB74D] to-[#654F90]">
      <Card
        className="max-w-md mx-auto p-6 my-10"
        sx={{ backgroundColor: "white", borderRadius: "10px", boxShadow: 3 }}
      >
        <CardContent>
          <Typography variant="h5" className="text-center mb-10" sx={{ color: "#654F90" }}>
            Login
          </Typography>
          {error && <p className="text-red-500 text-center">{error}</p>}
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
            <CustomButton type="submit" onClick={handleSubmit} sx={{ margin: "16px" }}>
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
              <Link className="p-1 underline cursor-pointer text-blue-700" to="/register">
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
