import React, { useState } from "react";

export default function Form() {
  const [formdata, setFormdata] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({
      ...formdata,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ formdata });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6"
    >
      <h1 className="text-2xl font-bold mb-6">Form</h1>
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <label className="block mb-2 font-medium">Name:</label>
        <input
          type="text"
          name="fullName"
          onChange={handleChange}
          value={formdata.fullName}
          className="w-full p-2 border rounded mb-4"
        />
        <label className="block mb-2 font-medium">Email:</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formdata.email}
          className="w-full p-2 border rounded mb-4"
        />
        <label className="block mb-2 font-medium">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formdata.password}
          className="w-full p-2 border rounded mb-4"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>
    </form>
  );
}
