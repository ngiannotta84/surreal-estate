import React from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="logo of Surreal Estate" />
      <ul className="navbar-links">
        <li className="navbar-links-item"> View Property</li>
        <li className="navbar-links-item"> Add a Property</li>
      </ul>
    </div>
  );
};
export default Navbar;
