import React, { useContext } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import AppContext from "../../components/provider/Context";
import { Link } from "react-router-dom";

function EbayNav() {
  const { searchTerm, setSearchTerm } = useContext(AppContext);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container-fluid">
      {/* Bottom Navbar with logo, search bar, and more */}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/" style={{ position: "relative" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/800px-EBay_logo.svg.png"
            width="80"
            alt="eBay Logo"
          />
          <span className="ml-2" style={{ fontSize: "11px" }}>
            Shop by category
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Search Bar */}
          <Form inline={true.toString()} className="mx-auto w-75">
            <InputGroup className="w-100">
              <FormControl
                type="text"
                style={{ borderRadius: "20px", height: "50px" }}
                placeholder="Search for anything"
                className="mr-sm-2"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <DropdownButton
                as={InputGroup.Append}
                variant="outline-secondary"
                title="All Categories"
              >
                <Dropdown.Item href="#">Electronics</Dropdown.Item>
                <Dropdown.Item href="#">Fashion</Dropdown.Item>
                <Dropdown.Item href="#">Home & Garden</Dropdown.Item>
              </DropdownButton>
              <Button
                variant="primary"
                style={{ borderRadius: "15px", width: "20%" }}
              >
                Search
              </Button>
            </InputGroup>
            {/* <Nav.Link href="#" className="ml-2">Advanced</Nav.Link> */}
          </Form>

          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/wishlist" style={{ position: "relative" }}>
              <FaHeart />
            </Nav.Link>
            <Nav.Link as={Link} to="/card" style={{ position: "relative" }}>
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default EbayNav;
