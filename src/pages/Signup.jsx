// src/pages/Signup.jsx
import React, { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({
    username: "",
    age: "",
    email: "",
    password: "",
    usertype: "1", // default to 1
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
  console.log(form)
  e.preventDefault();
  try {
    const response = await axios.post("http://localhost:5002/register", form);
    if (response.status === 200 || response.status === 201) {
      alert("User registered!");
    } else {
      alert("Registration failed. Please try again.");
    }
  } catch (error) {
    if (error.response && error.response.data && error.response.data.message) {
      alert(`Registration failed: ${error.response.data.message}`);
    } else {
      alert("Registration failed: Something went wrong.");
    }
  }
};


  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        className="border p-2 w-full"
        required
      />
      <select
        name="usertype"
        onChange={handleChange}
        value={form.usertype}
        className="border p-2 w-full"
        required
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button className="bg-blue-500 text-white px-4 py-2">Sign Up</button>
    </form>
  );
}
