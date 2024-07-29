import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:""
  });

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
          value={username}
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          id="email"
          value={email}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={password}
        />
        <button>Register</button>
        <p>This is an error!</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
}
