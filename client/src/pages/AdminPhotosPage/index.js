import React, { Component } from "react";
import AdminNavBar from "../../components/AdminNavBar";
import api from "../../services/api";

class AdminPhotosPage extends Component {
  state = {
    photos: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos = async () => {
    try {
      const response = await api.getAdminPhotos();
      this.setState({ photos: response.data, isLoading: false });
    } catch (err) {
      this.setState({ error: "Failed to load photos.", isLoading: false });
    }
  };

  handleDelete = async (photoId) => {
    try {
      await api.deletePhoto(photoId);
      this.fetchPhotos();
    } catch (err) {
      alert("Failed to delete the photo.");
    }
  };

  render() {
    const { photos, isLoading, error } = this.state;

    if (isLoading) return <div>Loading photos...</div>;
    if (error) return <div>{error}</div>;
    if (photos.length === 0) return <div>No photos available.</div>;

    return (
      <div>
        <AdminNavBar />
        <h2>Admin Photos Management</h2>
        <ul>
          {photos.map((photo) => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} width="50" />
              {photo.title}
              <button onClick={() => this.handleEdit(photo.id)}>Edit</button>
              <button onClick={() => this.handleDelete(photo.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AdminPhotosPage;
