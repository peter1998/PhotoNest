import React, { Component } from "react";
import PhotoList from "../../components/PhotoList";
import NavBar from "../../components/Navbar";

class PhotosPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <h2>Photos</h2>
          <PhotoList />
          {/* Pagination Logic Goes Here */}
        </div>
      </div>
    );
  }
}

export default PhotosPage;
