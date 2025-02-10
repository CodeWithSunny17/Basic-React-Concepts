import React, { useState } from "react";
import "./todolist.css";
import data from "./data.json";

export default function Todolist() {
  const [ndata, setNdata] = useState(data);

  const handleClick = (k) => {
    setNdata(ndata.filter((x) => x.key !== k));
  };

  const handleClear = () => {
    setNdata([]);
  };

  const handleUpdate = (key) => {
    setNdata(
      ndata.map((x) => {
        if (x.key === key) {
          return {
            title: "update",
          };
        } else {
          return x;
        }
      })
    );
  };

  return (
    <div className=" min-h-[100vh]">
      <h1>To-Do List</h1>
      <ul>
        {ndata.map((x) => (
          <li key={x.key}>
            {x.title}
            <br />
            <button onClick={() => handleClick(x.key)}>Delete</button>
            <button onClick={() => handleUpdate(x.key)}>Update</button>
          </li>
        ))}
        <button onClick={handleClear}>Clear</button>
      </ul>
    </div>
  );
}
