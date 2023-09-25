import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

import "./CreateUser.css";
import Navbar from "./Navbar";

const CreateUser = () => {

  const navigate = useNavigate(); // Initialize useHistory


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const addUser = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/createUser", {
        name,
        email,
        password,
      });
      console.log(res);
      alert('Congratulations!')
      // Redirect to the login page after successful registration
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
    <Navbar/>
      <div className="container-fluid">
        <h1 className="text-center mt-3 mb-3">Registration Form</h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="userEmail"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="userEmail">Email Address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="userPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="userPassword">Password</label>
        </div>

        <button onClick={addUser} className="btn btn-primary">
          Register
        </button>
      </div>
    </>
  );
};

export default CreateUser;
