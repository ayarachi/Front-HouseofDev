import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            House of Dev
          </Typography>
          <Link to="/app">
            <Button color="inherit">Home</Button>{" "}
          </Link>
          <Link to="/register">
            <Button color="inherit">Register</Button>{" "}
          </Link>
          <div style={{ flexGrow: 1 }}></div>
          <Link to="/login">
            <Button color="inherit">Login</Button>{" "}
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
  // return (
  //   <nav>
  //     <Link to="/">
  //       {" "}
  //       <h3 className="navbar-item has-text-white">Home</h3>
  //     </Link>
  //     <Link to="/search">
  //       {" "}
  //       <h3 className="navbar-item has-text-white">Search property</h3>
  //     </Link>
  //     <Link to="/register">
  //       {" "}
  //       <h3 className="navbar-item has-text-white">Register</h3>
  //     </Link>
  //     <Link to="/login">
  //       {" "}
  //       <h3 className="navbar-item has-text-white">Login</h3>
  //     </Link>
  //     <div className="navbar-item navbar-end">

  //     </div>
  //     </nav>
  // );
};

export default Navbar;
