import React, { useState } from "react";

export default function Form2() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const [state, setState] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((x) => ({
      ...x,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const errors = {};

    if (!input.name) {
      errors.name = "Name is required";
    }
    if (!input.email) {
      errors.email = "Email is required";
    }
    if (!input.password) {
      errors.password = "Password is required";
    } else if (input.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (!input.confirmPassword) {
      errors.confirmPassword = "Confirm password is required";
    } else if (input.password !== input.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    if (!input.age) {
      errors.age = "Age is required";
    } else if (isNaN(input.age) || input.age < 18) {
      errors.age = "Age must be at least 18";
    }
    if (!input.gender) {
      errors.gender = "Gender is required";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
    } else {
      setState("Form submitted!");
      setInput({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        age: "",
        gender: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Form2</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.name}</div>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Email:</label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.email}</div>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Password:</label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.password}</div>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.confirmPassword}</div>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Age:</label>
          <input
            type="text"
            name="age"
            value={input.age}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.age}</div>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Gender:</label>
          <select
            name="gender"
            value={input.gender}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div className="text-red-500 text-sm">{errors.gender}</div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
      <p className="mt-4 text-green-500 font-bold">{state}</p>
    </div>
  );
}
