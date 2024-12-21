import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';  // Add any specific carousel CSS

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,  // Enables auto-play
    autoplaySpeed: 3000,  // Time between transitions (in milliseconds)
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="carousel-item">
          <img src="/images/pasta.jpg" alt="Pasta" />
        </div>
        <div className="carousel-item">
          <img src="/images/breadbowl.jpg" alt="Breadbowl" />
        </div>
        <div className="carousel-item">
          <img src="/images/indian.jpg" alt="Indian" />
        </div>
        <div className="carousel-item">
          <img src="/images/ramen.jpg" alt="Ramen" />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
