import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
function Login() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const {currentUser, login} = useContext(AuthContext);
  console.log(currentUser);
  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });

    setError(null);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };


  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
          value={inputs.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
