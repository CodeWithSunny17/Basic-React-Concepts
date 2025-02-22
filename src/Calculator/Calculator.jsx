import React from "react";
import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [input, setInput] = useState("");
  // const [result, setResult] = useState(0);

  const calculate = (input) => {
    let result;
    try {
      const operators = ["+", "-", "*", "/", "%"];
      let operator = null;
      for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
          operator = input[i];
          break;
        }
      }
      const [operand1, operand2] = input.split(operator).map(parseFloat);

      if (operator === "+") {
        result = operand1 + operand2;
      } else if (operator === "-") {
        result = operand1 - operand2;
      } else if (operator === "*") {
        result = operand1 * operand2;
      } else if (operator === "/") {
        result = operand1 / operand2;
      } else if (operator === "%") {
        result = operand1 % operand2;
      } else {
        throw new Error("invalid operator");
      }
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const handleClick = (val) => {
    if (val === "C") {
      setInput("");
    } else if (val === "<") {
      setInput(input.slice(0, -1));
    } else if (val === "=") {
      calculate(input);
    } else {
      setInput((prev) => prev + val);
    }
  };
  return (
    <div className="wrapper min-h-[100vh]">
      <h1 className="text-2xl font-bold mb-6">Calculator</h1>
      <br />
      <div className="cal">
        <h1>{input}</h1>
        <div className="1">
          <button onClick={() => handleClick("C")}>C</button>
          <button onClick={() => handleClick("<")}>&lt;</button>
          <button onClick={() => handleClick("%")}>%</button>
          <button onClick={() => handleClick("/")}>/</button>
        </div>
        <div className="2">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("*")}>*</button>
        </div>
        <div className="3">
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("-")}>-</button>
        </div>
        <div className="4">
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("+")}>+</button>
        </div>
        <div className="5">
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("00")}>00</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={() => handleClick("=")}>=</button>
        </div>
      </div>
    </div>
  );
}
