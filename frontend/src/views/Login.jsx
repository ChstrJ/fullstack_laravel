import React from "react";
import { Link } from "react-router-dom";
import User from "../helpers/utils/User";

export default function Login() {
  return (
    <div className="login-signup-form animated fadeinDown">
      <div className="form">
        <h4 className="title">Welcome back...</h4>
        <h1 className="title">Login your account</h1>

        <form onSubmit={User.submit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not Registered? <Link to="/register">Signup here</Link>
          </p>
        </form>
        
      </div>
    </div>
  );
}
