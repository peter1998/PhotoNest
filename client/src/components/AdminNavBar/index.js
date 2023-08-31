import React from "react";
import styles from "./AdminNavBar.module.css";
import { NavLink } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <nav className={styles.adminNavBar}>
      <NavLink to="/admin" activeClassName={styles.active}>
        Home
      </NavLink>
      <NavLink to="/admin/photos" activeClassName={styles.active}>
        Photos
      </NavLink>
      <NavLink to="/admin/users" activeClassName={styles.active}>
        Users
      </NavLink>
    </nav>
  );
};

export default AdminNavBar;
