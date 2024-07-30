import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs(prev => {
      return {
        ...prev,
        [e.target.name]:e.target.value
      };
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  } 

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          id="username"
          value={inputs.username}
          onChange={handleChange}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          id="email"
          value={inputs.email}
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Register</button>
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}
