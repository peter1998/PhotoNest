import React, { Component } from "react";
import NavBar from "../../components/Navbar";

class ContactsPage extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  }
}

export default ContactsPage;
