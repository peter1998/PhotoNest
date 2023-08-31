import React from "react";
import styles from "./Logout.module.css";

const Logout = ({ onLogout }) => {
  return (
    <button className={styles.logoutButton} onClick={onLogout}>
      Logout
    </button>
  );
};

export default Logout;
