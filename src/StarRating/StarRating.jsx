import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating() {
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState(null);
  const handleClick = (index) => {
    setRating(index);
  };
  const handleMouseMove = (index) => {
    setHover(index);
  };
  const handleMouseLeave = (index) => {};
  return (
    <div className="bg-slate-300 wrapper flex-row">
      {[...Array(6)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            className={
              index <= (hover || rating)
                ? "active w-10 h-10"
                : "inactive w-10 h-10"
            }
          />
        );
      })}
    </div>
  );
}
