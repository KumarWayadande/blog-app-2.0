import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
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
        />
        <input
          required
          type="email"
          placeholder="email"
          name="email"
          id="email"
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          id="password"
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
