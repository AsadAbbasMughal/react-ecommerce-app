import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css"; // Custom styling for navbar

function Header({cart}) {
  // console.log(cart.length);
  
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Left Side Logo */}
        <Navbar.Brand href="/">
          <img
            src="https://up.yimg.com/ib/th?id=OIP.0H-Y3KoVrRYWa9XmSnlE4gHaFg&pid=Api&rs=1&c=1&qlt=95&w=165&h=122"
            alt="Logo"
            className="logo"
          />
        </Navbar.Brand>

        {/* Cart & User Icons Next to Toggle Button (Small Screens) */}
        <div className="d-flex align-items-center">
          {/* Cart Icon */}
          <Nav.Link as={Link} to="/add-to-cart" className="d-lg-none me-2">
            <FaShoppingCart size={22} />  <span>{cart.length }</span>
          </Nav.Link>

          {/* User Icon */}
          <NavDropdown 
            title={<FaUser size={22} />} 
            id="user-dropdown" 
            className="d-lg-none me-2"
          >
            <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
          </NavDropdown>

          {/* Toggle Button for Mobile View */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>

        {/* Right Side Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

            {/* User Icon (Large Screens) */}
            <NavDropdown 
              title={<FaUser size={22} />} 
              id="user-dropdown" 
              className="d-none d-lg-block"
            >
              <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>

        {/* Cart Icon (Large Screens) */}
        <Nav.Link as={Link} to="/add-to-cart" className="d-none d-lg-block">
          <FaShoppingCart size={22} /> <span>{cart.length }</span>
        </Nav.Link>
      </Container>
    </Navbar>
  );
}

export default Header;
