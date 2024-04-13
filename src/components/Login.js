import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let userName = email.current.value;
    let password1 = password.current.value;
    let signIpAs = loginas.current.value;
    let body = {
      userName,
      password: password1,
      signIpAs,
    };
    console.log(body);
    axios
      .post("http://localhost:8000/api/v1/user/login", body)
      .then((response) => {
        console.log(response.data.msg);
      });
  }

  const email = useRef();
  const password = useRef();
  const loginas = useRef();

  return (
    <div className="m-4 p-4 ">
      <h1 className="text-xl font-medium text-center ">Sign In</h1>
      <form className="flex flex-col rounded-lg w-96 m-auto">
        <input
          ref={email}
          className="h-12 p-4 m-2 border"
          type="email"
          placeholder="Enter Username"
          required-
        />
        <input
          ref={password}
          type="password"
          className="h-12 p-4 m-2 border"
          placeholder="Enter Password"
          required-
        />
        <select className="h-16 p-4 m-2 border" required ref={loginas}>
          <option value="" disabled selected hidden>
            How would you like to login as?
          </option>
          <option value="Customer">Customer</option>
          <option value="Merchant">Merchant</option>
        </select>
        <button
          className="bg-blue-500 rounded-lg text-white w-40 my-2 p-4 mx-auto"
          onClick={handleSubmit}
        >
          Login
        </button>
        <div className="m-2">
          New user?
          <span
            className="underline text-blue-300 cursor-pointer"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
