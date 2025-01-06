import React from "react";
import "./StarRating.scss";

const StarRating = ({ rating = 0, totalStars = 5 }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
      if (i <= rating) {
        // Full star
        stars.push(
          <span key={i} className="star full">
            &#9733;
          </span>
        );
      } else if (i - 0.5 <= rating) {
        // Half star
        stars.push(
          <span key={i} className="star half">
            &#9733; {/* Overlay for half effect */}
          </span>
        );
      } else {
        // Empty star
        stars.push(
          <span key={i} className="star empty">
            &#9734; {/* Unicode for empty star */}
          </span>
        );
      }
    }
    return stars;
  };

  return <div className="star-rating">{renderStars()}</div>;
};

export default StarRating;
