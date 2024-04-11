import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const password = useRef();
  const signupas = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    let body = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      userName: email.current.value,
      password: password.current.value,
      signUpAs: signupas.current.value,
    };
    console.log(body);
    axios
      .post("http://localhost:8000/api/v1/user/signup", body)
      .then((response) => {
        localStorage.setItem("token", response.data.msg);
      });
  }

  return (
    <div className="m-4 p-4 ">
      <h1 className="text-xl font-medium text-center ">Sign Up</h1>
      <form className="flex flex-col rounded-lg w-96 m-auto">
        <input
          className="h-12 p-4 m-2 border"
          type="text"
          placeholder="Enter First Name"
          ref={firstName}
        />
        <input
          className="h-12 p-4 m-2 border"
          type="text"
          placeholder="Enter Last Name"
          ref={lastName}
        />
        <input
          className="h-12 p-4 m-2 border"
          type="email"
          placeholder="Enter Username"
          ref={email}
        />
        <input
          type="password"
          className="h-12 p-4 m-2 border"
          placeholder="Enter Password"
          ref={password}
        />
        <select className="h-16 p-4 m-2 border" required ref={signupas}>
          <option value="" disabled selected hidden>
            How would you like to sign up as?
          </option>
          <option value="Customer">Customer</option>
          <option value="Merchant">Merchant</option>
        </select>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 rounded-lg text-white w-40 my-2 p-4 mx-auto"
        >
          Sign Up
        </button>
        <div className="m-2">
          Existing user?
          <span
            className="underline text-blue-300 cursor-pointer"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
