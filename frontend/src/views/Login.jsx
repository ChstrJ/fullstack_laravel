import React, { useRef } from "react";
import { Link } from "react-router-dom";
import User from "../helpers/utils/User";
import axiosClient from "../api/axiosClient";
import { useStateContext } from "../contexts/ContextProvider";

export default function Login() {
  const {setToken, setUser} = useStateContext()

  const emailRef = useRef();
  const passRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    console.log(payload)
    axiosClient.post("/login", payload)
    .then((res) => {
      const {user, token} = res.data
      setUser(user);
      setToken(token);

    })
    .catch(err => {
      const response = err.response
      if(response && response.status === 422) {
        console.log(response.data.errors)
      }
    });
  };


  return (
    <div className="login-signup-form animated fadeinDown">
      <div className="form">
        <h4 className="title">Welcome back...</h4>
        <h1 className="title">Login your account</h1>

        <form onSubmit={submit}>
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not Registered? <Link to="/register">Signup here</Link>
          </p>
        </form>
        
      </div>
    </div>
  );
}
