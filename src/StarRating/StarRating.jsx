import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating() {
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(null);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = () => {
    setHover(null);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-[100vh]">
      <h1>Star Rating</h1>
      <br />
      <div className="flex flex-row">
        {[...Array(6)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              className={`w-10 h-10 cursor-pointer ${
                index <= (hover || rating) ? "text-yellow-500" : "text-gray-300"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
