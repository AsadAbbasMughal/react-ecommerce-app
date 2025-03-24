import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <Carousel interval={500}>  {/* Yahan Global Interval Set Kar Diya */}
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

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-zy4cg.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-v2zvq.jpg"
          alt="Fourth slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.priceoye.pk/banners/pakistan-priceoye-slider-ttny2.jpg"
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
