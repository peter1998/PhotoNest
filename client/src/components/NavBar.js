import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/photo">Photos</Link>
      <Link to="/users">Users</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};

export default NavBar;
