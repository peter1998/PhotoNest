import React, { Component } from "react";
import AdminNavBar from "../../components/AdminNavBar";
import api from "../../services/api";

class AdminPhotoCommentsPage extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = async () => {
    try {
      const response = await api.getComments();
      this.setState({ comments: response.data, isLoading: false });
    } catch (err) {
      this.setState({ error: "Failed to load comments.", isLoading: false });
    }
  };

  handleDelete = async (commentId) => {
    try {
      await api.deleteComment(commentId);
      this.fetchComments();
    } catch (err) {
      alert("Failed to delete the comment.");
    }
  };

  render() {
    const { comments, isLoading, error } = this.state;

    if (isLoading) return <div>Loading comments...</div>;
    if (error) return <div>{error}</div>;
    if (comments.length === 0) return <div>No comments available.</div>;

    return (
      <div>
        <AdminNavBar />
        <h2>Admin Photo Comments Management</h2>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              {comment.content}
              <button onClick={() => this.handleEdit(comment.id)}>Edit</button>
              <button onClick={() => this.handleDelete(comment.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AdminPhotoCommentsPage;
