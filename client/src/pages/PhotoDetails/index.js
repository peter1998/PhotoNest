import React, { Component } from "react";
import NavBar from "../../components/Navbar";
import styles from "./PhotoDetails.module.css";

class PhotoDetailPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className={styles.detailContainer}>
          <h2>Photo Details</h2>

          <img className={styles.photoImage} src="path_to_photo" alt="Photo" />

          <form className={styles.commentForm}>
            <textarea
              className={styles.textarea}
              placeholder="Add your comment..."
            ></textarea>
            <button className={styles.button} type="submit">
              Add Comment
            </button>
          </form>

          <button className={`${styles.button} ${styles.deleteButton}`}>
            Delete Photo
          </button>
        </div>
      </div>
    );
  }
}

export default PhotoDetailPage;
