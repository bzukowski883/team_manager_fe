import { Link, NavLink } from "react-router-dom";

import "./../styles/tokens.css"
import "../styles/components.css"
import "./../styles/login.css"

export default function Signup() {
  return (
    <div className="login-page">
      <div className="signup-box">
        <div className="box-container">
          <text className="sign-up">Sign in screen is still being worked on. <Link to="/sign-in" className="link">Back to sign in</Link></text>
        </div>
      </div>
    </div>
  )
}