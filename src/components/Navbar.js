import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const usuario = JSON.parse(localStorage.getItem("user"));
  const existeSesion = usuario ? true : false;

  const navigateTo = useNavigate();

  const handleLogout = () => {
    axios
      .post("/api/users/logout")
      .then(() => localStorage.removeItem("user"))
      .then(() => {
        navigateTo("/");
      })
      .catch((err) => {
        console.error(err);
        alert("El logout fallo");
      });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "rgb(224, 224, 221)" }} position="static">
        <Toolbar>
          <Typography color="grey" variant="h6" component="div">
            HOD
          </Typography>
          <Link to="/">
            <Button  variant="outlined">Home</Button>
          </Link>
          <Link to="/properties">
            <Button variant="outlined">Mirar Propiedades</Button>
          </Link>
          <Link to="/user/profile">
            <Button variant="outlined">Perfil</Button>
          </Link>
          <Link to="/Admin">
            <Button variant="outlined">Administrar Propiedades</Button>
          </Link>

          <Link to="/register">
            <Button variant="outlined">Register</Button>
          </Link>

          <div style={{ flexGrow: 1 }}></div>
          <SearchBar></SearchBar>

          {!existeSesion ? (
            <Link to="/login">
              <Button variant="outlined">Iniciar Sesion</Button>
            </Link>
          ) : (
            <Button onClick={handleLogout} variant="outlined">
              Cerrar Sesion
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
