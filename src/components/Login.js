import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const navigateTo = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const correo = (e) => {
    setEmail(e.target.value);
  };

  const contraseña = (e) => {
    setPass(e.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    const user = { email, pass };
    axios
      .post("/api/login", user)
      .then((res) => {
        console.log(res);
        navigateTo("/app");
      })
      .catch((err) => {
        console.error(err);
        alert("El login falló");
      });
  };

  return (
    <div className="container image">
      <div className="formulario">
        <h1>HOUSE OF DEV</h1>
        <div>
          <TextField
            label="Correo"
            onChange={correo}
            value={email}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="Contraseña"
            onChange={contraseña}
            value={pass}
            variant="outlined"
          />
        </div>
        <div>
          <Button onClick={login} variant="text">
            Login
          </Button>
        </div>
        <div>
          <Button variant="text">Registrarse</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
