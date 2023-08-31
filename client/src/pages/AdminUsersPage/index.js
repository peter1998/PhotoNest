import React, { useState, useEffect } from "react";
import AdminNavBar from "../../components/AdminNavBar";
import api from "../../services/api";

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    api
      .getAllUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users", error);
      });
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      api
        .deleteUser(userId)
        .then(() => {
          fetchUsers();
        })
        .catch((error) => {
          console.error("Error deleting user", error);
        });
    }
  };

  return (
    <div>
      <AdminNavBar />
      <h2>Admin User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}

            <button
              onClick={() => alert("Edit functionality not implemented yet!")}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUsersPage;
