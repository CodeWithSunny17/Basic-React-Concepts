import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const password = watch("password");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Form using useForm</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="block font-medium">Name:</label>
          <input
            type="text"
            {...register("name", { required: "Name is Required" })}
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.name?.message}</div>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Email:</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is Required",
              pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid" },
            })}
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.email?.message}</div>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Password:</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.password?.message}</div>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Confirm Password:</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Confirm Password is Required",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Age:</label>
          <input
            type="text"
            {...register("age", {
              required: "Age is Required",
              validate: (value) => value >= 18 || "Age must be at least 18",
            })}
            className="w-full p-2 border rounded"
          />
          <div className="text-red-500 text-sm">{errors.age?.message}</div>
        </div>
        <div className="mb-4">
          <label className="block font-medium">Gender:</label>
          <select
            {...register("gender", { required: "Gender is Required" })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <div className="text-red-500 text-sm">{errors.gender?.message}</div>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
}
