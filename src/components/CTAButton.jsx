import React from "react";
import "./CTAButton.scss";

const CTAButton = ({CTA, onClick}) => {
  return (
    <div onClick={onClick} className="cta-button">
      <span className="cta-text">{CTA}</span>
      <div className="cta-icon">→</div>
    </div>
  );
};

export default CTAButton;
