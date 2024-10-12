import React, { useEffect, useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const handleRandomColorHEXGenerator = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[Math.floor(Math.floor(Math.random() * hex.length))];

      setColor(hexColor);
    }
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
  }, typeOfColor);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <button
        onClick={() => {
          setTypeOfColor("hex");
        }}
      >
        HEX Color
      </button>
      <button
        onClick={() => {
          setTypeOfColor("rgb");
        }}
      >
        RGB Color
      </button>
      <button
        onClick={
          typeOfColor === "hex"
            ? handleRandomColorHEXGenerator
            : handleRandomColorRGBGenerator
        }
      >
        Random Color
      </button>
      <span>{color}</span>
    </div>
  );
}
