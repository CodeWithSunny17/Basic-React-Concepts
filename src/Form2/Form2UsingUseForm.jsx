import React from "react";
import "./form.css";
import { useForm } from "react-hook-form";

export default function Form2UsingUseForm() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const password = watch("password");

  return (
    <div className="formcontainer min-h-[100vh]">
      <h1>Form2 using useForm</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: "Name is Required" })}
          />
          <div>{errors.name && <span>{errors.name.message}</span>}</div>
        </div>
        <div>
          <label htmlFor="">Email: </label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: "Email is Required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid" },
            })}
          />
          <div>{errors.email && <span>{errors.email.message}</span>}</div>
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input
            type="password"
            name="password"
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 6,
                message: "Password must be of 6 characters",
              },
            })}
          />
          <div>{errors.password && <span>{errors.password.message}</span>}</div>
        </div>
        <div>
          <label htmlFor="">Confirm Password: </label>
          <input
            type="password"
            name="confirmPassword"
            {...register("confirmPassword", {
              required: "Confirm Password is Required",
              validate: (value) =>
                value === password || "Password did not match",
            })}
          />
          <div>
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="">age: </label>
          <input
            type="text"
            name="age"
            {...register("age", {
              required: "Age is Required",
              validate: (value) => value >= 18 || "Age must be greater than 18",
            })}
          />
          <div>{errors.age && <span>{errors.age.message}</span>}</div>
        </div>
        <div>
          <label htmlFor="">gender: </label>
          <select
            name="gender"
            {...register("gender", { required: "Gender is Required" })}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div>{errors.gender && <span>{errors.gender.message}</span>}</div>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
