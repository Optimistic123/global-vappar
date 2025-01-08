import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider2.scss';

function Responsive({ slides }) {
  // Slider settings
  const settings = {
    dots: true, // Show pagination dots
    infinite: false, // No infinite scrolling by default
    speed: 500, // Transition speed
    slidesToShow: 3, // Default number of slides to show
    slidesToScroll: 3, // Default number of slides to scroll
    initialSlide: 0, // Start at the first slide
    responsive: [
      {
        breakpoint: 1024, // Large tablets and desktops
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true, // Enable infinite scrolling for this breakpoint
          dots: true,
        },
      },
      {
        breakpoint: 600, // Small tablets and large phones
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // Small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container2">
      <Slider {...settings}>
        {slides.map((slide, index) => {
          const { icon, title, subtitle, description } = slide; // Destructure slide properties
          return (
            <div className="slide-item" key={index}>
              <div className="slide-icon">{icon}</div>
              {/* <div className="slide-img">
                <img src={icon} alt={title} />
              </div> */}
              <h3 className="slide-title">{title}</h3>
              <p className="slide-subtitle">{subtitle}</p>
              <p className="slide-description">{description}</p>
              <button className="slide-btn" onClick={slide.onClick}>Learn More</button>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Responsive;
