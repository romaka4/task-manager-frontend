import { Link } from "react-router-dom"


function Register() {
  return (
    <div>
      <h1>Register</h1>

      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password"/>
        <button type="submit">
        Register
        </button>
      </form>
      <Link to="/login">
        Alraedy have an account? Login
      </Link>
    </div>
  )
}

export default Register