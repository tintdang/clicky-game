import React from "react";
import "./Navbar.css";

const Navbar = () =>
  <nav className="navbar">
    <a className="navbar-brand" href="#">Clicky Game</a>
    <span className="navbar-text">Click an image to begin!</span>
    <span>Score: 0 | Top Score: 0</span>
  </nav>;

export default Navbar;