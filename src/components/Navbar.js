import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        {" "}
        <h3 className="navbar-item has-text-white">Home</h3>
      </Link>
      <Link to="/search">
        {" "}
        <h3 className="navbar-item has-text-white">Search property</h3>
      </Link>
      <Link to="/register">
        {" "}
        <h3 className="navbar-item has-text-white">Register</h3>
      </Link>
      <Link to="/login">
        {" "}
        <h3 className="navbar-item has-text-white">Login</h3>
      </Link>
      <div className="navbar-item navbar-end">
       
      </div>
      </nav>
  );
};

export default Navbar;