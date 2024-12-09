import React from "react";
import "./ServiceSection.scss"; // Create a CSS file for styling

const ServiceSection = ({ image, title, points, buttonText, onClick }) => {
  return (
    <div className="service-section">
      <div className="service-section__image">
        <img src={image} alt={title} />
      </div>
      <div className="service-section__content">
        <h2>{title}</h2>
        <ul>
          {points.map((point, index) => (
            <li key={index}>
              <strong>{point.label}</strong>: {point.description}
            </li>
          ))}
        </ul>
        <button onClick={onClick}>{buttonText}</button>
      </div>
    </div>
  );
};

export default ServiceSection;
