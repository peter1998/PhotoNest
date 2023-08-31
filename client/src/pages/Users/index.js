import React, { useState, useEffect } from "react";
import NavBar from "../../components/Navbar";
import { Link } from "react-router-dom";
import api from "../../services/api";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .getAllUsers()
      .then((response) => {
        const sortedUsers = response.data.sort(
          (a, b) => (b.photosCount || 0) - (a.photosCount || 0)
        );
        setUsers(sortedUsers);
      })
      .catch((error) => {
        console.error("Error fetching users", error);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}> {user.name} </Link>
          <span>Photos uploaded: {user.photosCount}</span>{" "}
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
