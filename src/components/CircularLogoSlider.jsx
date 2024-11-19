import React from "react";
import "./CircularLogoSlider.scss";

const CircularLogoSlider = ({ logos }) => {
  return (
    <div className="circular-logo-slider">
      <div className="circular-track">
        {logos.concat(logos).map((logo, index) => (
          <div className="logo-item" key={index}>
            <img src={logo.src} alt={logo.alt || `Logo ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularLogoSlider;
