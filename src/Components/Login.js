import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const baseURL = process.env.REACT_APP_API_BASE_URL;
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        `${baseURL}/auth/login`,
        input,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 202) {
        alert("login successful");
        const data = response.data; // Assuming responseBuilder wraps your data in a "data" key
        // Save JWT token to local storage
        localStorage.setItem("jwt", data.otherParams.jwtToken);
        localStorage.setItem("user", JSON.stringify(data.data));
        navigate("/");
      } else {
        // Handle errors
        alert(`Login failed: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error during login:", error);
      if (error.response) {
        // Server responded with a status other than 200 range
        alert(`Login failed: ${error.response.data.message}`);
      } else if (error.request) {
        // Request was made but no response received
        alert("No response from server. Please try again later.");
      } else {
        // Something else happened
        alert("An error occurred. Please try again later.");
      }
    }
  };

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={input.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Login</button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
