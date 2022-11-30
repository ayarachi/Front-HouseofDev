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
      
      <AppBar sx= {{ background: " #FE4236"}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            HOD
          </Typography>
          <Link to="/">
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
  
};

export default Navbar;
