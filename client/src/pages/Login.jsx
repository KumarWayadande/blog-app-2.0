function Login() {
  return (
    <div className="auth">
        <h1>Login</h1>
        <form>
            <input type="text" placeholder="username" name="username" id="username" />
            <input type="password" placeholder="password" name="password" id="password" />
            <button>Login</button>
        </form>
    </div>
  )
}

export default Login;
