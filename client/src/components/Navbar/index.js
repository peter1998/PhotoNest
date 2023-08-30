import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navContainer}>
      <Link to="/" className={styles.navLink}>
        Home
      </Link>
      <Link to="/photo" className={styles.navLink}>
        Photos
      </Link>
      <Link to="/users" className={styles.navLink}>
        Users
      </Link>
      <Link to="/contacts" className={styles.navLink}>
        Contacts
      </Link>
    </nav>
  );
};

export default NavBar;
