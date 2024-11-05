import React from "react";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

function SignIn() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <div className="text-center mb-4">
            <Nav.Link href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
                alt="eBay Logo"
                width="120"
              />
            </Nav.Link>
          </div>
          <h3 className="text-center mb-3">Sign in to your account</h3>
          <p className="text-center">
            New to eBay? <a href="/register">Create account</a>
          </p>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                placeholder="Email or username"
                className="mb-3"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 mb-3"
              style={{ backgroundColor: "#0064D2", borderRadius: "20px" }}
            >
              Continue
            </Button>
          </Form>

          <div className="text-center my-3">or</div>

          <Button
            variant="outline-secondary"
            className="w-100 mb-2 d-flex align-items-center justify-content-center"
            style={{ borderRadius: "20px" }}
          >
            <FaGoogle className="mr-2" /> Continue with Google
          </Button>

          <Button
            variant="outline-secondary"
            className="w-100 mb-2 d-flex align-items-center justify-content-center"
            style={{ borderRadius: "20px" }}
          >
            <FaFacebook className="mr-2" /> Continue with Facebook
          </Button>

          <Button
            variant="outline-secondary"
            className="w-100 mb-4 d-flex align-items-center justify-content-center"
            style={{ borderRadius: "20px" }}
          >
            <FaApple className="mr-2" /> Continue with Apple
          </Button>

          <Form.Group
            controlId="formBasicCheckbox"
            className="d-flex justify-content-center"
          >
            <Form.Check type="checkbox" label="Stay signed in" />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
}

export default SignIn;
