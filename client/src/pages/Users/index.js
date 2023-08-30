import React, { Component } from "react";
import NavBar from "../../components/Navbar";
import { Link } from "react-router-dom";

class UsersPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h2>Users</h2>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((user) => (
          <div key={user}>
            User {user}{" "}
            {/* You can use Link here to direct to user's profile */}
          </div>
        ))}
        {/* Pagination Logic Goes Here */}
      </div>
    );
  }
}

export default UsersPage;
