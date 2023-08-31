import React, { Component } from "react";
import NavBar from "../../components/Navbar";
import api from "../../services/api";

class ContactsPage extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    error: null,
    success: null,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = this.state;

    try {
      const response = await api.submitContactForm({ name, email, message });
      this.setState({ success: "Message sent successfully!", error: null });
    } catch (error) {
      this.setState({
        error: "Failed to send the message. Please try again later.",
        success: null,
      });
    }
  };

  render() {
    const { name, email, message, error, success } = this.state;
    return (
      <div>
        <NavBar />
        <h2>Contact Us</h2>

        {error && <div style={{ color: "red" }}>{error}</div>}
        {success && <div style={{ color: "green" }}>{success}</div>}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            value={message}
            onChange={this.handleChange}
            placeholder="Message"
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
}

export default ContactsPage;
