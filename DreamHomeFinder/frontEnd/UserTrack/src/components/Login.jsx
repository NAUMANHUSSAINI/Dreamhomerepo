// Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./CreateUser.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/loginUser", {
        email,
        password,
      });
      navigate('/dashboard')

      // if (res.data.success) {
      //   // Redirect to the dashboard page on successful login
      //   navigate("/dashboard");
        
      // } else {
      //   alert("Login failed. Please check your credentials.");
      // }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container-fluid">
      <h1 className="text-center mt-3 mb-3">Login</h1>
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

      <button onClick={handleLogin} className="btn btn-primary">
        Login
      </button>
    </div>
        </>
  );
};

export default Login;
