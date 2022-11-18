import React from "react";
import axios from "axios";
import { useState } from "react";

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
    const user = { name, lastName,phone, email, pass };
    axios
      .post("/api/register", user)
      .then((res) => res.data)
      .then((user) => {
     
        console.log(user);
      });
  };

  return (
    <form onSubmit={registro}>
      <label>Name</label>
      <input type="text" value={name} onChange={nombre} />
      <label>Lastname</label>
      <input type="text" value={lastName} onChange={apellido} />
      <label>Phone</label>
      <input type="number" value={phone} onChange={telefono} />
      <label>Email</label>
      <input type="text" value={email} onChange={correo} />
      <label>Password</label>
      <input type="password" value={pass} onChange={contraseña} />

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Register;
