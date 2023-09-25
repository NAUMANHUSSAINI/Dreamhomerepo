// Navbar.js
import React from "react";
import "./Navbar.css"; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><a href="/">DreamHomeFinder</a></div>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/CreateUser">Register</a>
        <a href="/Login">Login</a>
        <a href="/">Logout</a>
        <a href="/UserList">Our_Clients</a>
      </div>
    </nav>
  );
}

export default Navbar;
