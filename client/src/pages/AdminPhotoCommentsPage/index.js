import React, { Component } from "react";
import AdminNavBar from "../../components/AdminNavBar";

class AdminPhotoCommentsPage extends Component {
  render() {
    return (
      <div>
        <AdminNavBar />
        <h2>Admin Photo Comments Management</h2>
        {/* Mock data for demonstration */}
        <ul>
          {["comment1", "comment2", "comment3"].map((comment) => (
            <li key={comment}>
              {comment} <button>Edit</button> <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AdminPhotoCommentsPage;
