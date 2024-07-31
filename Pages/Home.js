import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigate("/login")
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const userName = user?.name; // Safely access the name property

  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="hero-title">Welcome - {userName}</h1>
        <p className="hero-subtitle">Experience the best of web design and development</p>
      </div>
      <button
      onClick={handleLogout} 
       type='submit'>Logout</button>
    </div>
  );
}

export default Home;
