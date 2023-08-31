import React, { Component } from "react";
import api from "../../services/api";
import PhotoList from "../../components/PhotoList";
import NavBar from "../../components/Navbar";
import Pagination from "../../components/Pagination";

class PhotosPage extends Component {
  state = {
    currentPage: 1,
    totalPages: 3,
    photos: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos = async () => {
    this.setState({ isLoading: true, error: null });

    try {
      const response = await api.getAllPhotos();
      this.setState({
        photos: response.data.photos,
        totalPages: response.data.totalPages,
        isLoading: false,
      });
    } catch (error) {
      this.setState({ error: "Failed to load photos.", isLoading: false });
    }
  };

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage }, this.fetchPhotos);
  };

  render() {
    const { currentPage, totalPages, photos, isLoading, error } = this.state;

    return (
      <div>
        <NavBar />
        <div>
          <h2>Photos</h2>
          {isLoading && <div>Loading photos...</div>}
          {error && <div>{error}</div>}
          {!isLoading && !error && (
            <div>
              <PhotoList photos={photos} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={this.handlePageChange}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default PhotosPage;
