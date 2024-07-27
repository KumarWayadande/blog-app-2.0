import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          name="username"
          id="username"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
        />
        <button>Login</button>
        <p>This is an error!</p>
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
}

export default Login;
