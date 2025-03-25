import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./ContactSection.css"; // Custom CSS for extra styling

const ContactSection = () => {
  return (
    <section className="contact-section position-relative">
      {/* Map Background */}
      <div className="map-container">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        ></iframe>
      </div>

      {/* Contact Form */}
      <Container className="py-5">
        <Row className="justify-content-end">
          <Col lg={4} md={6} className="contact-form-box p-4 shadow-lg">
            <h2 className="mb-3 text-dark">Feedback</h2>
            <p className="text-muted">
              Post-ironic portland shabby chic echo park, banjo fashion axe.
            </p>

            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Your message..." />
              </Form.Group>

              <Button variant="primary" className="w-100">
                Submit
              </Button>
            </Form>

            <p className="text-muted mt-3 small">
              Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
