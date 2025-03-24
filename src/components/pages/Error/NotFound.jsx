import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./NotFound.css"; // Custom styling

function NotFound() {
  return (
    <Container fluid className="not-found d-flex align-items-center justify-content-center">
      <Row>
        <Col md={12} className="text-center">
          <div className="error-box">
            <h1 className="display-1 fw-bold text-danger">404</h1>
            <h2 className="fw-semibold">Oops! Page Not Found</h2>
            <p className="text-danger fw-bold">The page you're looking for doesn't exist.</p>
            <Link to="/">
              <Button variant="danger" className="px-4 py-2">Go Back Home</Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
