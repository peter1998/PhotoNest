import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";
import api from "../../services/api";

const HomePage = () => {
  const [latestPhotos, setLatestPhotos] = useState([]);

  useEffect(() => {
    const fetchLatestPhotos = async () => {
      try {
        const response = await api.getAllPhotos();
        setLatestPhotos(response.data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching the photos:", error);
      }
    };

    fetchLatestPhotos();
  }, []);

  return (
    <div className="home-container">
      <NavBar />

      <div className="latest-photos">
        <h2>Latest Photos</h2>
        {latestPhotos.map((photo) => (
          <Link to={`/photo/${photo.id}`} key={photo.id}>
            {photo.title}
          </Link>
        ))}
      </div>

      <div className="register-section">
        <h2>Register</h2>
        <RegistrationForm />
      </div>

      <div className="login-section">
        <h2>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default HomePage;
