import React, { useState } from "react";

export default function Plusminus() {
  const [number, setNumber] = useState(0);

  const handlePlusClick = () => {
    setNumber(number + 1);
  };

  const handleMiusClick = () => {
    setNumber(number - 1);
  };

  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Counter</h1>
      <h2 className="text-3xl font-semibold mb-4">{number}</h2>
      <div className="flex gap-4">
        <button
          className="w-12 h-12 bg-green-500 text-white text-2xl rounded-lg hover:bg-green-600"
          onClick={handlePlusClick}
        >
          +
        </button>
        <button
          className="w-12 h-12 bg-red-500 text-white text-2xl rounded-lg hover:bg-red-600"
          onClick={handleMiusClick}
        >
          -
        </button>
      </div>
    </div>
  );
}
