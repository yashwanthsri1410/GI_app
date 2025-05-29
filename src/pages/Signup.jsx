// src/pages/Signup.jsx
import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [form, setForm] = useState({ username: "", password: "", email: "", name: "", age: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5002/register", form);
    alert("User registered!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-4">
      {["username", "password", "email", "name", "age"].map(field => (
        <input key={field} type={field === "password" ? "password" : "text"}
          name={field} placeholder={field} onChange={handleChange}
          className="border p-2 w-full" required />
      ))}
      <button className="bg-blue-500 text-white px-4 py-2">Sign Up</button>
    </form>
  );
}
