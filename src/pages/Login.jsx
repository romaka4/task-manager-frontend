import { Link } from "react-router-dom"

function Login() {
  return (
    <div>
      <h1>Login</h1>

      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password"/>
        <button type="submit">
          Login
        </button>
      </form>
      <Link to="/register">
        Don`t have an account? Register
      </Link>
    </div>
  )
}

export default Login