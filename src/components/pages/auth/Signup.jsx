import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Auth.css"; // Custom styling

function Signup() {
  return (
    <Container fluid className="auth-container d-flex align-items-center justify-content-center">
      <Row>
        <Col md={12} className="text-center">
          <Card className="auth-box">
            <h2 className="fw-bold text-light">Sign Up</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Full Name" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Button variant="danger" className="w-100">Sign Up</Button>
            </Form>
            <p className="mt-3 text-light">
              Already have an account? <Link to="/login" className="text-danger">Login</Link>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
