import React from "react";
import "./form.css";
import { useState } from "react";

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
      errors.name = "name is required";
    }
    if (!input.email) {
      errors.email = "email is required";
    }
    if (!input.password) {
      errors.password = "password is required";
    } else if (input.password.length < 6) {
      errors.password = "password must be greater than 6 characters";
    }
    if (!input.confirmPassword) {
      errors.confirmPassword = "confirm password is required";
    } else if (input.password !== input.confirmPassword) {
      errors.confirmPassword = "Password didn't match";
    }
    if (!input.age) {
      errors.age = "age is required";
    } else if (isNaN(input.age) || input.age < 18) {
      errors.age = "age is invalid";
    }
    if (!input.gender) {
      errors.gender = "gender is required";
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
    console.log(errors.age);
  };

  return (
    <div className="formcontainer min-h-[100vh]">
      <h1>Form2</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          <div>{errors.name}</div>
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
          />
          <div>{errors.email}</div>
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
          />
          <div>{errors.password}</div>
        </div>
        <div>
          <label htmlFor="">Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChange}
          />
          <div>{errors.confirmPassword}</div>
        </div>
        <div>
          <label htmlFor="">age: </label>
          <input
            type="text"
            name="age"
            value={input.age}
            onChange={handleChange}
          />
          <div>{errors.age}</div>
        </div>
        <div>
          <label htmlFor="">gender: </label>
          <select name="gender" value={input.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div>{errors.gender}</div>
        </div>

        <button>Submit</button>
      </form>
      <p>{state}</p>
    </div>
  );
}
