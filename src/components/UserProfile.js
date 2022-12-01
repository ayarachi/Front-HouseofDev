import React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

import styles from "./Register.module.css";

function UserProfile() {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};
  return (
    <div className={styles.register}>
      <h1>Mi Perfil</h1>
      <div>
        <TextField
          label="Nombre"
          type="text"
          value={usuario.name}
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          label="Apellido"
          type="text"
          value={usuario.lastName}
          variant="outlined"
        />
      </div>
      <TextField
        label="Telefono"
        type="number"
        value={usuario.Buttonphone}
        variant="outlined"
      />
      <div></div>
      <TextField
        label="Correo"
        type="text"
        value={usuario.email}
        variant="outlined"
      />
      <div></div>
      <TextField
        label="Contraseña"
        type="password"
        value={usuario.pass}
        variant="outlined"
      />
      <div>
        <Button variant="text">Confirmar cambios</Button>
      </div>
    </div>
  );
}

export default UserProfile;
