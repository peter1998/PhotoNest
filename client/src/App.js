import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PhotosPage from "./pages/PhotoPage";
import UsersPage from "./pages/Users";
import ContactsPage from "./pages/ContactPage";
import PhotoDetailPage from "./pages/PhotoDetails";
import HomePage from "./pages/HomePage";
import AdminUsersPage from "./pages/AdminUsersPage";
import AdminPhotosPage from "./pages/AdminPhotosPage";
import UserContext from "./context/UserContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";
import AdminHomePage from "./pages/AdminHome";
import UserProfilePage from "./pages/UserProfilePage";
import AdminPhotoCommentsPage from "./pages/AdminPhotoCommentsPage";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photo" element={<PhotosPage />} />
          <Route path="/photo/:id" element={<PhotoDetailPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/users" element={<UsersPage />} />

          {/* Routes for logged-in users */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <UserProfilePage />
              </ProtectedRoute>
            }
          />

          {/* Admin routes */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminHomePage />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <AdminUsersPage />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/photos"
            element={
              <AdminRoute>
                <AdminPhotosPage />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/photo/:id"
            element={
              <AdminRoute>
                <AdminPhotoCommentsPage />
              </AdminRoute>
            }
          />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
