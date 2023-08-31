import React from "react";
import styles from "./AdminNavBar.module.css";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <nav className={styles.adminNavBar}>
      <Link to="/admin">Home</Link>
      <Link to="/admin/photos">Photos</Link>
      <Link to="/admin/users">Users</Link>
    </nav>
  );
};

export default AdminNavBar;
