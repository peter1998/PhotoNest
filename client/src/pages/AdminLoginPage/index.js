import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import LoginForm from "../../components/LoginForm";
import AdminNavBar from "../../components/AdminNavBar";

const AdminLoginPage = () => {
  return (
    <>
      <AdminNavBar />
      <Container className="mt-5">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Jumbotron>
              <h2 className="text-center">Admin Login</h2>
              <LoginForm />
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminLoginPage;
