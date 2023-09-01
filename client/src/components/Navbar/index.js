import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.active : styles.navLink
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/photo"
        className={({ isActive }) =>
          isActive ? styles.active : styles.navLink
        }
      >
        Photos
      </NavLink>
      <NavLink
        to="/users"
        className={({ isActive }) =>
          isActive ? styles.active : styles.navLink
        }
      >
        Users
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) =>
          isActive ? styles.active : styles.navLink
        }
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default NavBar;
