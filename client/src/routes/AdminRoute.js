import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const AdminRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  if (!user || user.role !== "admin") return <Navigate to="/" />;

  return children;
};

export default AdminRoute;
