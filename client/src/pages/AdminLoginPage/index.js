import React from "react";
import LoginForm from "../../components/LoginForm";
import AdminNavBar from "../../components/AdminNavBar";

const AdminLoginPage = () => {
  return (
    <div>
      <AdminNavBar />
      <h2>Admin Login</h2>
      <LoginForm />
    </div>
  );
};

export default AdminLoginPage;
