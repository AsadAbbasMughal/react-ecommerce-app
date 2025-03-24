import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import "./Footer.css"

function Footer() {
  return (
    <footer className="custom-footer text-center text-lg-start">
      <Container className="p-4">
        <Row>
          {/* Left Side - Logo */}
          <Col md={3} sm={6} className="mb-4 mb-md-0">
            <h5 className="footer-logo">LOGO</h5>
            <p>© 2025 Your Company. All Rights Reserved.</p>
          </Col>

          {/* Middle - Quick Links */}
          <Col md={6} sm={6} className="mb-4 mb-md-0">
            <Row>
              <Col xs={6}>
                <h6 className="footer-title">Quick Links</h6>
                <ul className="list-unstyled">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#services">Services</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </Col>
              <Col xs={6}>
                <h6 className="footer-title">Support</h6>
                <ul className="list-unstyled">
                  <li><a href="#faq">FAQ</a></li>
                  <li><a href="#terms">Terms</a></li>
                  <li><a href="#privacy">Privacy</a></li>
                </ul>
              </Col>
            </Row>
          </Col>

          {/* Right Side - Social Icons */}
          <Col md={3} sm={12} className="mb-4 mb-md-0">
            <h6 className="footer-title">Follow Us</h6>
            <div className="social-icons">
              <a href="https://facebook.com"><FaFacebook /></a>
              <a href="https://twitter.com"><FaTwitter /></a>
              <a href="https://instagram.com"><FaInstagram /></a>
              <a href="https://linkedin.com"><FaLinkedin /></a>
              <a href="https://github.com"><FaGithub /></a>
              <a href="mailto:your-email@example.com"><FaEnvelope /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
