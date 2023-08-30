import React, { Component } from "react";
import NavBar from "../../components/Navbar";

class PhotoDetailPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div>
          <h2>Photo Details</h2>
          {/* Display Photo */}
          <img src="path_to_photo" alt="Photo" />
          {/* Add Comment Form */}
          <form>
            <textarea placeholder="Add your comment..."></textarea>
            <button type="submit">Add Comment</button>
          </form>
          {/* Delete Photo Button */}
          <button>Delete Photo</button>
        </div>
      </div>
    );
  }
}

export default PhotoDetailPage;
