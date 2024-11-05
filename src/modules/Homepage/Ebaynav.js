import React, { useContext } from 'react';
import { Navbar, Nav, Form, FormControl, Button, InputGroup, Dropdown, DropdownButton, Container, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import AppContext from '../../components/provider/Context';
import { Link } from 'react-router-dom';

function EbayNav() {
  const { searchTerm, setSearchTerm, category } = useContext(AppContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', alignItems: 'center', fontSize: '14px', borderBottom: '1px solid #ccc' }}>
        {/* Left-aligned links */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '15px' }}>Hi! <Link to="/login" style={{ color: '#007bff' }}>Sign in</Link> or <Link to="/register" style={{ color: '#007bff' }}>register</Link></p>
          <p style={{ marginRight: '15px' }}><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Daily Deals</Link></p>
          <p style={{ marginRight: '15px' }}><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Help & Contact</Link></p>
        </div>

        {/* Right-aligned links */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '15px' }}><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Ship to</Link></p>
          <p style={{ marginRight: '15px' }}><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Sell</Link></p>
          <p style={{ marginRight: '15px' }}><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Watchlist</Link></p>
          <p style={{ marginRight: '15px' }}><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>My eBay</Link></p>
          <p style={{ marginRight: '15px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <span role="img" aria-label="notifications">🔔</span>
            </Link>
          </p>
          <p>
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <span role="img" aria-label="cart">🛒</span>
            </Link>
          </p>
        </div>
      </div>

      <div className='container-fluid'>
        {/* Bottom Navbar with logo, search bar, and more */}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
              width="80"
              alt="eBay Logo"
            />
            <span className="ml-2" style={{ fontSize: "11px" }}>Shop by category</span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Search Bar */}
            <Form inline className="mx-auto w-75">
              <InputGroup className="w-100">
                <FormControl
                  type="text"
                  style={{ borderRadius: "20px", height: "50px" }}
                  placeholder="Search for anything"
                  className="mr-sm-2"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <DropdownButton as={InputGroup.Append} variant="outline-secondary" title="All Categories">
                  {category.map((category) => (
                    <Container>
                      <Row>
                        <Col md={3}>
                          <Dropdown.Item key={category.id} href={`/category/${category.id}`}>{category.name}</Dropdown.Item>
                        </Col>
                      </Row>
                    </Container>
                  ))}
                </DropdownButton>
                <Button variant="primary" style={{ borderRadius: "15px", width: "20%" }}>Search</Button>
              </InputGroup>
              {/* <Nav.Link href="#" className="ml-2">Advanced</Nav.Link> */}
            </Form>

            <Nav className="ml-auto">
              <Nav.Link href="#">
                <FaShoppingCart />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
}

export default EbayNav;
