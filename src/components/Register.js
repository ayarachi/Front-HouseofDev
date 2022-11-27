import Button from "@mui/material/Button";
import axios from "axios";
import React, { useState } from "react";

const Register = () => {
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
      .post("/api/register", user)
      .then((res) => res.data)
      .then((user) => {
        console.log(user);
      });
  };

  return (
    <form>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={nombre} />
      </div>
      <div>
        <label>Lastname</label>
        <input type="text" value={lastName} onChange={apellido} />
      </div>
      <div>
        <label>Phone</label>
        <input type="number" value={phone} onChange={telefono} />
      </div>
      <div>
        <label>Email</label>
        <input type="text" value={email} onChange={correo} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={pass} onChange={contraseña} />
      </div>
      <div>
        <Button onClick={registro} variant="contained">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Register;
