import React  from "react";
import Button from "@mui/material/Button";
import { TextField, Box } from "@mui/material";

import styles from "./Register.module.css";
import Favorites from "./Favorites";
import axios from "axios";
import { useState } from "react";

function UserProfile() {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};

  

  return (
    <>
      <Box display="flex" justifyContent="center">
        <div className={styles.UserProfile}>
          <h1>Mi Perfil</h1>
          <div>
            <TextField
              label="Editar nombre"
              type="text"
              value={usuario.name}
              variant="outlined"
            />
          </div>
          <div>
            <TextField
              label="Editar apellido"
              type="text"
              value={usuario.lastName}
              variant="outlined"
            />
          </div>
          <TextField
            label="Editar telefono"
            type="number"
            value={usuario.phone}
            variant="outlined"
          />
          <div></div>
          <TextField
            label="Editar correo"
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
          <div>Is Admin: {usuario.isAdmin ? "true" : "false"}</div>
          {usuario.isAdmin && (
            <div>
              <Button variant="text">Admin botón</Button>
            </div>
          )}
          {!usuario.isAdmin && (
            <div>
              <Button variant="text">Confirmar cambios</Button>
            </div>
          )}
        </div>
      </Box>
      <Favorites></Favorites>{" "}
    </>
  );
}

export default UserProfile;
