import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaMobileAlt, FaLaptop, FaHeadphones, FaClock } from "react-icons/fa";
import "./Hero.css";
import Service from "../service/Service";

function Hero() {
  const [products, setProducts] = useState([]);

  // Fetch Products from JSON API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products") // Dummy API
      .then((response) => {
        setProducts(response.data.slice(0, 6)); // Sirf 6 products lene hain
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <>
      {/* Hero Slider */}
      <Carousel interval={3000} className="hero-slider">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-1rqc2.jpg"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-yb506.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Featured Categories */}
      <section className="featured-categories">
        <Container>
          <h2 className="section-title">Shop by Category</h2>
          <Row>
            <Col md={3} sm={6}>
              <Card className="category-card">
                <FaMobileAlt className="category-icon" />
                <Card.Body>
                  <Card.Title>Mobile Phones</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="category-card">
                <FaLaptop className="category-icon" />
                <Card.Body>
                  <Card.Title>Laptops</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="category-card">
                <FaHeadphones className="category-icon" />
                <Card.Body>
                  <Card.Title>Accessories</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3} sm={6}>
              <Card className="category-card">
                <FaClock className="category-icon" />
                <Card.Body>
                  <Card.Title>Watches</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Flash Sale Section */}
      <section className="flash-sale mt-4 mb-5">
        <Container>
          <h2 className="section-title">Flash Sale 🔥</h2>
          <Row>
            {products.length > 0 ? (
              products.map((product) => (
                <Col md={4} key={product.id}>
                  <Card className="sale-card">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      alt={product.title}
                    />
                    <Card.Body>
                      <Card.Title>{product.title.substring(0, 25)}...</Card.Title>
                      <p>
                        <del>${(product.price * 1.2).toFixed(2)}</del>{" "}
                        <strong>${product.price}</strong>
                      </p>
                      {/* Buy Now button removed */}
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <p className="loading-text">Loading Flash Sale Items...</p>
            )}
          </Row>
        </Container>
      </section>

      <Service />
    </>
  );
}

export default Hero;
