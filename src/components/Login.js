import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const Login = () => {
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
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={login}>
      <label>Email</label>
      <input type="text" value={email} onChange={correo} />
      <label>Password</label>
      <input type="password" value={pass} onChange={contraseña} />

      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Login;
