import React, { useState } from "react";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: "",
    nationality: "",
    role: "",
  });

  // to store value in localStorage

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/users/register", input, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Handle successful registration
        navigate("/login");
      } else {
        // Handle errors
        const errorData = await response.json();
        alert(`Registration failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="register-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
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
            <label htmlFor="firstName">firstName:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={input.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">lastName:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={input.lastName}
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
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nationality">Nationality:</label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={input.nationality}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select
              id="role"
              name="role"
              value={input.role}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select a role
              </option>
              <option value="ROLE_CUSTOMER">Customer</option>
              <option value="ROLE_HOTELOWNER">Owner</option>
              <option value="ROLE_ADMIN">Admin</option>
            </select>
          </div>
          <button type="submit">Register</button>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
