import React, { Component } from "react";
import PhotoList from "../../components/PhotoList";
import NavBar from "../../components/Navbar";
import Pagination from "../../components/Pagination";

class PhotosPage extends Component {
  state = {
    currentPage: 1,
    totalPages: 3,
  };

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  render() {
    return (
      <div>
        <NavBar />
        <div>
          <h2>Photos</h2>
          <PhotoList />
          <Pagination
            currentPage={this.state.currentPage}
            totalPages={this.state.totalPages}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default PhotosPage;
