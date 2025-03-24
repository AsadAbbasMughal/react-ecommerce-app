import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./Buynow.css";

const Buynow = ({ buyNow }) => {
    console.log(buyNow);
    




  return (
    <Container className="buy-now-container">
      <h2 className="text-center my-4">Buy Now</h2>
      <Row>
        {/* Order Summary */}
        <Col md={6}>
          <Card className="order-summary">
            <Card.Body>
              <h5>Order Summary</h5>
              <div className="d-flex align-items-center">
                <img
                  src={buyNow?.images[0] || "https://via.placeholder.com/100"}
                  alt="Product"
                  className="order-img"
                />
                <div className="ms-3">
                  <p><strong>{buyNow.title || "Product Name"}</strong></p>
                  <p>Price: ${buyNow?.price || 100}</p>
                  <p>Quantity: {buyNow?.quantity || 1}</p>
                </div>
              </div>
              <hr />
              <h5>Total: ${buyNow?.price || 100}</h5>
            </Card.Body>
          </Card>
        </Col>

        {/* Checkout Form */}
        <Col md={6}>
          <Card className="checkout-form">
            <Card.Body>
              <h5>Enter Your Details</h5>
              <Form >
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    
                    
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                   
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                  
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Payment Method</Form.Label>
                  <Form.Select name="paymentMethod" >
                    <option value="COD">Cash on Delivery</option>
                    <option value="Card">Credit/Debit Card</option>
                    <option value="Bank">Bank Transfer</option>
                  </Form.Select>
                </Form.Group>

                <Button variant="success" type="submit" className="w-100">
                  Place Order
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Buynow;
