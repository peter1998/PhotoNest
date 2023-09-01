import React from "react";
import styles from "./AdminNavBar.module.css";
import { NavLink } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <nav className={styles.adminNavBar}>
      <NavLink
        to="/admin"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/admin/photos"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Photos
      </NavLink>
      <NavLink
        to="/admin/users"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        Users
      </NavLink>
    </nav>
  );
};

export default AdminNavBar;
