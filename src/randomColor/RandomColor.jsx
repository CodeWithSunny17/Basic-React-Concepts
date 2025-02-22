import React, { useEffect, useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const handleRandomColorHEXGenerator = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.random() * hex.length)];
    }
    setColor(hexColor);
  };

  const handleRandomColorRGBGenerator = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "hex") {
      handleRandomColorHEXGenerator();
    } else {
      handleRandomColorRGBGenerator();
    }
  }, [typeOfColor]);

  return (
    <div
      className="w-screen h-screen flex flex-col justify-center items-center text-white text-center gap-4"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold">Random Color Generator</h1>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
          onClick={() => setTypeOfColor("hex")}
        >
          HEX Color
        </button>
        <button
          className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
          onClick={() => setTypeOfColor("rgb")}
        >
          RGB Color
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={
            typeOfColor === "hex"
              ? handleRandomColorHEXGenerator
              : handleRandomColorRGBGenerator
          }
        >
          Random Color
        </button>
      </div>
      <span className="text-xl font-semibold mt-2">{color}</span>
    </div>
  );
}
