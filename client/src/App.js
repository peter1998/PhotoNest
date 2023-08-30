import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhotosPage from "./pages/PhotoPage";
import UsersPage from "./pages/Users";
import ContactsPage from "./pages/ContactPage";
import PhotoDetailPage from "./pages/PhotoDetails";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo" element={<PhotosPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/photo/:id" element={<PhotoDetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
