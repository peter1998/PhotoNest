import React, { Component } from "react";
import NavBar from "../../components/Navbar";
import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import RegistrationForm from "../../components/RegistrationForm";

class HomePage extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div>
          <h2>Latest Photos</h2>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((photo) => (
            <Link to={`/photo/${photo}`} key={photo}>
              Photo {photo}
            </Link>
          ))}
        </div>

        <div>
          <h2>Register</h2>
          <RegistrationForm />
        </div>

        <div>
          <h2>Login</h2>
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default HomePage;
