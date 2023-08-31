import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <NavLink
        to="/"
        exact
        activeClassName={styles.active}
        className={styles.navLink}
      >
        Home
      </NavLink>
      <NavLink
        to="/photo"
        activeClassName={styles.active}
        className={styles.navLink}
      >
        Photos
      </NavLink>
      <NavLink
        to="/users"
        activeClassName={styles.active}
        className={styles.navLink}
      >
        Users
      </NavLink>
      <NavLink
        to="/contacts"
        activeClassName={styles.active}
        className={styles.navLink}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default NavBar;
