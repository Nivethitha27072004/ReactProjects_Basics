import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

function StarRating() {
  const [rating, setRating] = useState(0); // stores selected rating
  const [hover, setHover] = useState(0); // stores hover (temporary highlight)
  const noOfStars = 5;

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        const currentRating = index + 1; // because index starts from 0
        return (
          <FaStar
            key={currentRating}
            size={40}
            color={currentRating <= (hover || rating) ? "gold" : "black"}
            onClick={() => setRating(currentRating)}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(0)}
            style={{ cursor: "pointer", transition: "color 0.2s" }}
          />
        );
      })}
    </div>
  );
}

export default StarRating;
