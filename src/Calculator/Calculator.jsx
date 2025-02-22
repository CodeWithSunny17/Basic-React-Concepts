import React, { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");

  const calculate = (input) => {
    let result;
    try {
      const operators = ["+", "-", "*", "/", "%"];
      let operator = operators.find((op) => input.includes(op));
      if (!operator) throw new Error("Invalid Operator");
      const [operand1, operand2] = input.split(operator).map(parseFloat);

      switch (operator) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
        case "%":
          result = operand1 % operand2;
          break;
        default:
          throw new Error("Invalid Calculation");
      }
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClick = (val) => {
    if (val === "C") setInput("");
    else if (val === "<") setInput(input.slice(0, -1));
    else if (val === "=") calculate(input);
    else setInput((prev) => prev + val);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-white p-4">
      <h1 className="text-3xl text-gray-800 font-bold mb-6">Calculator</h1>
      <div className="w-full max-w-xs bg-gray-800 p-4 rounded-lg shadow-lg">
        <div className="bg-gray-700 text-right p-4 text-2xl font-mono rounded-md mb-4">
          {input}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[
            "C",
            "<",
            "%",
            "/",
            "7",
            "8",
            "9",
            "*",
            "4",
            "5",
            "6",
            "-",
            "1",
            "2",
            "3",
            "+",
            "0",
            "00",
            ".",
            "=",
          ].map((val) => (
            <button
              key={val}
              onClick={() => handleClick(val)}
              className="p-4 text-xl font-semibold bg-gray-600 hover:bg-gray-500 rounded-md focus:outline-none transition"
            >
              {val}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
