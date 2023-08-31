import React, { useState, useContext } from "react";
import styles from "./LoginForm.module.css";
import UserContext from "../../context/UserContext";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { setUser } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      loginData.email === "admin@example.com" &&
      loginData.password === "admin"
    ) {
      setUser({ id: 1, name: "Admin", role: "admin" });
      console.log("Admin logged in successfully");
    } else {
      console.error("Login failed");
    }

    setLoginData({ email: "", password: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <input
        type="email"
        name="email"
        value={loginData.email}
        onChange={handleChange}
        placeholder="Email Address"
      />
      <input
        type="password"
        name="password"
        value={loginData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
