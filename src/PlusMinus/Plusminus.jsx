import React, { useState } from "react";
import "./Plusminus.css";

export default function Plusminus() {
  const [number, setNumber] = useState(0);

  const handlePlusClick = () => {
    setNumber(number + 1);
  };

  const handleMiusClick = () => {
    setNumber(number - 1);
  };

  return (
    <div className=" min-h-[100vh] flex-col justify-center items-center">
      <h1>{number}</h1>
      <div>
        <button className="w-10" onClick={handlePlusClick}>
          +
        </button>
        <button className="w-10" onClick={handleMiusClick}>
          -
        </button>
      </div>
    </div>
  );
}
