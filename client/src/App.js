import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import PhotosPage from "./components/PhotoPage";
import UsersPage from "./components/UsersPage";
import ContactsPage from "./components/ContactsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo" element={<PhotosPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
