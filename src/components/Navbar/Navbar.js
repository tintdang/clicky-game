import React from "react";
import "./Navbar.css";

const Navbar = props =>
  <nav className="navbar">
    <a className="navbar-brand" href="/">Clicky Game</a>
    <span className="navbar-text">{props.gameResult}</span>
    <span>Score: {props.score} | Top Score: {props.topScore}</span>
  </nav>;

export default Navbar;