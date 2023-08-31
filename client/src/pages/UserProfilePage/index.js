import React, { useState, useEffect } from "react";
import api from "../../services/api";

const UserProfilePage = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const userId = 1;

    api
      .getProfile(userId)
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user profile", error);
      });
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {profile.name}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
    </div>
  );
};

export default UserProfilePage;
