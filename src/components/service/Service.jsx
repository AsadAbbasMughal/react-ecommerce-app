import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaTruck, FaMoneyBillWave, FaShieldAlt, FaSyncAlt, FaHeadset, FaBoxOpen } from "react-icons/fa";
import "./Service.css"; // Custom CSS

const Service = () => {
  const services = [
    { icon: <FaTruck />, title: "Fast Delivery", desc: "Get your products delivered within 24-48 hours." },
    { icon: <FaMoneyBillWave />, title: "Best Price Guarantee", desc: "We offer competitive prices on all products." },
    { icon: <FaShieldAlt />, title: "Secure Payment", desc: "100% secure payment with trusted platforms." },
    { icon: <FaSyncAlt />, title: "Easy Returns", desc: "Hassle-free return policy for all products." },
    { icon: <FaHeadset />, title: "24/7 Customer Support", desc: "We are here to help you anytime, anywhere." },
    { icon: <FaBoxOpen />, title: "Quality Products", desc: "Genuine & high-quality products from top brands." },
  ];

  return (
    <section className="services-section">
      <Container>
        <h2 className="section-title">Why Shop With Us?</h2>
        <p className="section-subtitle">We provide the best shopping experience.</p>

        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col md={4} sm={6} key={index} className="mb-4">
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h5 className="service-title">{service.title}</h5>
                <p className="service-desc">{service.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
