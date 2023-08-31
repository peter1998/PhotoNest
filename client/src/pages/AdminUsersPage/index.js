import React, { Component } from "react";
import AdminNavBar from "../../components/AdminNavBar";

class AdminUsersPage extends Component {
  render() {
    return (
      <div>
        <AdminNavBar />
        <h2>Admin User Management</h2>
        {/* Mock data for demonstration */}
        <ul>
          {["user1", "user2", "user3"].map((user) => (
            <li key={user}>
              {user} <button>Edit</button> <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AdminUsersPage;
