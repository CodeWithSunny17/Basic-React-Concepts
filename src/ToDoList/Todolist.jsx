import React, { useState } from "react";
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
            ...x,
            title: "Updated",
          };
        } else {
          return x;
        }
      })
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-gray-800 mb-5">To-Do List</h1>
      <ul className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        {ndata.map((x) => (
          <li
            key={x.key}
            className="flex justify-between items-center p-2 border-b last:border-none"
          >
            <span className="text-lg text-gray-700">{x.title}</span>
            <div>
              <button
                onClick={() => handleUpdate(x.key)}
                className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2 hover:bg-blue-600"
              >
                Update
              </button>
              <button
                onClick={() => handleClick(x.key)}
                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        onClick={handleClear}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
      >
        Clear All
      </button>
    </div>
  );
}
