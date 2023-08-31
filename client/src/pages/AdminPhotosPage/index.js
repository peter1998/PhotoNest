import React, { Component } from "react";
import AdminNavBar from "../../components/AdminNavBar";

class AdminPhotosPage extends Component {
  render() {
    return (
      <div>
        <AdminNavBar />
        <h2>Admin Photos Management</h2>
        {/* Mock data for demonstration */}
        <ul>
          {["photo1", "photo2", "photo3"].map((photo) => (
            <li key={photo}>
              {photo} <button>Edit</button> <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AdminPhotosPage;
