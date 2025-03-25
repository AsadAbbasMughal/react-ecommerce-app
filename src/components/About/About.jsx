import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaUsers, FaCheckCircle, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const testimonialSection = document.getElementById("testimonials");

      if (testimonialSection && scrollPosition > testimonialSection.offsetTop) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center text-white">
        <Container>
          <h1>About Us</h1>
          <p>Empowering businesses with cutting-edge solutions</p>
        </Container>
      </section>

      {/* About Us Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-right">
            <img
              src="https://img.freepik.com/free-vector/online-shopping-concept_52683-63898.jpg"
              alt="About Us"
              className="img-fluid rounded"
            />
          </Col>
          <Col md={6} data-aos="fade-left">
            <h2>Who We Are</h2>
            <p>We are a dedicated team of professionals passionate about delivering top-notch services.</p>
            <Button variant="primary">Learn More</Button>
          </Col>
        </Row>
      </Container>

      {/* Mission & Vision */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={6} data-aos="fade-up">
              <h3>Our Mission</h3>
              <p>To provide exceptional services that help businesses and individuals thrive.</p>
            </Col>
            <Col md={6} data-aos="fade-up">
              <h3>Our Vision</h3>
              <p>To be a leading provider of innovative solutions worldwide.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <Row>
          <Col md={4} data-aos="zoom-in">
            <Card className="text-center p-3">
              <FaCheckCircle size={40} className="mb-3 custom-icon" />
              <h5>Quality Services</h5>
              <p>We ensure the highest quality standards in all our projects.</p>
            </Card>
          </Col>
          <Col md={4} data-aos="zoom-in">
            <Card className="text-center p-3">
              <FaUsers size={40} className="mb-3 custom-icon" />
              <h5>Expert Team</h5>
              <p>Our team consists of experienced professionals in various fields.</p>
            </Card>
          </Col>
          <Col md={4} data-aos="zoom-in">
            <Card className="text-center p-3">
              <FaCheckCircle size={40} className="mb-3 custom-icon" />
              <h5>Customer Satisfaction</h5>
              <p>We prioritize customer needs and ensure 100% satisfaction.</p>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Testimonials */}
      <section className="bg-light py-5" id="testimonials">
        <Container>
          <h2 className="text-center mb-4">What Our Clients Say</h2>
          <Row>
            <Col md={6} data-aos="fade-up">
              <Card className={`p-3 testimonial-card ${visible ? "visible" : ""}`}>
                <p>"This company exceeded our expectations. Highly recommended!"</p>
                <h6>- John Doe</h6>
              </Card>
            </Col>
            <Col md={6} data-aos="fade-up">
              <Card className={`p-3 testimonial-card ${visible ? "visible" : ""}`}>
                <p>"Amazing service and support. Our business has grown significantly!"</p>
                <h6>- Jane Smith</h6>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Info */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <Row>
          <Col md={4} className="text-center" data-aos="fade-up">
            <FaMapMarkerAlt size={40} className="mb-3 custom-icon" />
            <p>123 Business Street, Karachi</p>
          </Col>
          <Col md={4} className="text-center" data-aos="fade-up">
            <FaPhone size={40} className="mb-3 custom-icon" />
            <p>+92 300 1234567</p>
          </Col>
          <Col md={4} className="text-center" data-aos="fade-up">
            <FaEnvelope size={40} className="mb-3 custom-icon" />
            <p>info@yourcompany.com</p>
          </Col>
        </Row>
      </Container>

     
    </div>
  );
};

export default About;
