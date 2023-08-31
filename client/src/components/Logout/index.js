import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import api from "../../services/api";

const Logout = ({ onLogout }) => {
  const handleLogout = async () => {
    try {
      await api.logoutUser();
      onLogout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip id="tooltip-bottom">Logout from your account</Tooltip>}
    >
      <Button variant="danger" onClick={handleLogout}>
        Logout
      </Button>
    </OverlayTrigger>
  );
};

export default Logout;
