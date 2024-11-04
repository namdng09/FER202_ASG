import React from 'react';
import { Form, Button, Container, Row, Col, ToggleButton, ButtonGroup, Nav } from 'react-bootstrap';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

function CreateAccount() {
  const [accountType, setAccountType] = React.useState('personal');

  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
        {/* Left Side Image */}
        <Col md={6} className="p-0 d-none d-md-block">
          <div
            className="h-100"
            style={{
              backgroundImage: "url('https://ir.ebaystatic.com/cr/v/c01/buyer_dweb_individual.jpg')", // Replace with actual image URL
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              borderBottomLeftRadius: '30px',
              borderTopLeftRadius: '30px',
              borderRadius: "50px"
            }}
          ></div>
        </Col>

        {/* Right Side Form */}
        <Col md={6} className="d-flex justify-content-center align-items-center">
          <div className="w-75">
          <Nav.Link href="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
                alt="eBay Logo"
                width="120"
              />
            </Nav.Link>
            <div className="text-right mb-3">
              <a href="/login">Already have an account? Sign in</a>
            </div>

            <h3 className="mb-4">Create an account</h3>

            {/* Account Type Toggle */}
            <ButtonGroup className="w-100 mb-4">
              <ToggleButton
                type="radio"
                variant="outline-dark"
                value="personal"
                checked={accountType === 'personal'}
                onChange={() => setAccountType('personal')}
                className="w-50"
              >
                Personal
              </ToggleButton>
              <ToggleButton
                type="radio"
                variant="outline-dark"
                value="business"
                checked={accountType === 'business'}
                onChange={() => setAccountType('business')}
                className="w-50"
              >
                Business
              </ToggleButton>
            </ButtonGroup>

            {/* Account Form */}
            <Form>
              <Row>
                {accountType === 'personal' && (
                  <>
                    <Col md={6}>
                      <Form.Group controlId="formFirstName">
                        <Form.Control type="text" placeholder="First name" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group controlId="formLastName">
                        <Form.Control type="text" placeholder="Last name" />
                      </Form.Group>
                    </Col>
                  </>
                )}
                <Col md={12}>
                  <Form.Group controlId="formEmail">
                    <Form.Control type="email" placeholder="Email" className="mt-3" />
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group controlId="formPassword">
                    <Form.Control type="password" placeholder="Password" className="mt-3" />
                  </Form.Group>
                </Col>
              </Row>

              <p className="text-muted mt-3">
                By selecting Create personal account, you agree to our <a href="#">User Agreement</a> and acknowledge reading our <a href="#">User Privacy Notice</a>.
              </p>

              <Button
                variant="primary"
                type="submit"
                className="w-100 mt-2"
                disabled
                style={{ backgroundColor: '#ccc', borderRadius: '20px' }}
              >
                Create personal account
              </Button>
            </Form>

            {/* Continue with Third-Party Accounts */}
            <div className="text-center my-3">or continue with</div>

            <Button
              variant="outline-secondary"
              className="w-100 mb-2 d-flex align-items-center justify-content-center"
              style={{ borderRadius: '20px' }}
            >
              <FaGoogle className="mr-2" /> Continue with Google
            </Button>

            <Button
              variant="outline-secondary"
              className="w-100 mb-2 d-flex align-items-center justify-content-center"
              style={{ borderRadius: '20px' }}
            >
              <FaFacebook className="mr-2" /> Continue with Facebook
            </Button>

            <Button
              variant="outline-secondary"
              className="w-100 mb-2 d-flex align-items-center justify-content-center"
              style={{ borderRadius: '20px' }}
            >
              <FaApple className="mr-2" /> Continue with Apple
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateAccount;
