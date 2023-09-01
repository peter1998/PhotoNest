import React, { Component } from "react";
import NavBar from "../../components/Navbar";
import api from "../../services/api";
import styles from "./PhotoDetails.module.css";

class PhotoDetailPage extends Component {
  state = {
    photo: null,
    isLoading: true,
    error: null,
    comment: "",
  };

  componentDidMount() {
    this.fetchPhotoDetails();
  }

  fetchPhotoDetails = async () => {
    try {
      const photoId = this.props.match.params.id;
      const response = await api.getPhoto(photoId);
      this.setState({ photo: response.data, isLoading: false });
    } catch (error) {
      this.setState({
        error: "Failed to load photo details.",
        isLoading: false,
      });
    }
  };

  handleCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  };

  handleCommentSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.addComment(this.state.photo.id, { text: this.state.comment });
      this.fetchPhotoDetails();
    } catch (error) {
      this.setState({ error: "Failed to add comment." });
    }
  };

  handleDeletePhoto = async () => {
    try {
      await api.deletePhoto(this.state.photo.id);
    } catch (error) {
      this.setState({ error: "Failed to delete photo." });
    }
  };

  render() {
    const { photo, isLoading, error, comment } = this.state;

    return (
      <div>
        <NavBar />
        <div className={styles.detailContainer}>
          <h2>Photo Details</h2>

          {isLoading && <div>Loading photo details...</div>}
          {error && <div>{error}</div>}
          {photo && (
            <>
              <img className={styles.photoImage} src={photo.path} alt="Photo" />

              <form
                className={styles.commentForm}
                onSubmit={this.handleCommentSubmit}
              >
                <textarea
                  className={styles.textarea}
                  placeholder="Add your comment..."
                  value={comment}
                  onChange={this.handleCommentChange}
                ></textarea>
                <button className={styles.button} type="submit">
                  Add Comment
                </button>
              </form>

              <button
                className={`${styles.button} ${styles.deleteButton}`}
                onClick={this.handleDeletePhoto}
              >
                Delete Photo
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default PhotoDetailPage;
