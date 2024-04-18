import React, { useRef, useState } from "react";
import User from "../helpers/utils/User";
import { Link } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../api/axiosClient";

export default function Register() {
  const { setUser, setToken } = useStateContext();

  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    axiosClient.post("/register", payload)
    .then((res) => {
      const {user, token} = res.data

    
      setUser(user);
      setToken(token);


      nameRef.current.value = ""
      emailRef.current.value = ""
      passRef.current.value = ""
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
        <h1 className="title">Register your account</h1>

        <form onSubmit={submit}>
          <input ref={nameRef} type="name" placeholder="Name" />
          <input ref={emailRef} type="email" placeholder="Email" />
          <input ref={passRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Registered? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
