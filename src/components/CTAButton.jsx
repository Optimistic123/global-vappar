import React from "react";
import "./CTAButton.scss";

const CTAButton = ({CTA, onClick, backgroundColor, IconBackgroundColor, IconColor}) => {
  return (
    <div onClick={onClick} className="cta-button" style={{backgroundColor: backgroundColor}}>
      <span className="cta-text">{CTA}</span>
      <div className="cta-icon" style={{backgroundColor: IconBackgroundColor, color: IconColor}}>→</div>
    </div>
  );
};

export default CTAButton;
