import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import styles from "./RegistrationForm.module.css";
import api from "../../services/api";

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.registerUser(userData);
      if (response.data.success) {
        setMessage("Registration successful! You can now login.");
        setError(null);
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : "An error occurred.");
    } finally {
      setLoading(false);
      setUserData({ username: "", email: "", password: "" });
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit} className={styles.registrationForm}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Enter password"
              />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
