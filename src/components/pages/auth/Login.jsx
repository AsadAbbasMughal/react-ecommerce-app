import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "./Auth.css"; // Custom styling

function Login() {
  return (
    <Container fluid className="auth-container d-flex align-items-center justify-content-center">
      <Row>
        <Col md={12} className="text-center">
          <Card className="auth-box">
            <h2 className="fw-bold text-light">Login</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Button variant="danger" className="w-100">Login</Button>
            </Form>
            <p className="mt-3 text-light">
              Don't have an account? <Link to="/signup" className="text-danger">Sign Up</Link>
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
