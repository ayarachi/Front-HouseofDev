import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  const navigateTo = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const nombre = (e) => {
    setName(e.target.value);
  };
  const apellido = (e) => {
    setLastname(e.target.value);
  };
  const telefono = (e) => {
    setphone(e.target.value);
  };
  const correo = (e) => {
    setEmail(e.target.value);
  };
  const contraseña = (e) => {
    setPassword(e.target.value);
  };
  const registro = (e) => {
    e.preventDefault();
    const user = { name, lastName, phone, email, pass };
    axios
      .post("/api/users/register", user)
      .then((res) => res.data)
      .then((user) => {
        console.log(user);
        navigateTo("/login");
      });
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <h1>REGISTRARSE</h1>
        <div>
          <TextField
            label="Nombre"
            type="text"
            value={name}
            onChange={nombre}
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            label="Apellido"
            type="text"
            value={lastName}
            onChange={apellido}
            variant="outlined"
          />
        </div>
        <TextField
          label="Telefono"
          type="number"
          value={phone}
          onChange={telefono}
          variant="outlined"
        />
        <div></div>
        <TextField
          label="Correo"
          type="text"
          value={email}
          onChange={correo}
          variant="outlined"
        />
        <div></div>
        <TextField
          label="Contraseña"
          type="password"
          value={pass}
          onChange={contraseña}
          variant="outlined"
        />
        <div>
          <Button onClick={registro} variant="text">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
