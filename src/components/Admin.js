import React from "react";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <Stack spacing={2} direction="row">
      <h5>
        {" "}
        PANEL DEL ADMINISTRADOR
      </h5>
      <Link to = "/admin/users">
      <Button variant="outlined">USUARIOS </Button>
      </Link>
      <Link to="/admin/properties">
        <Button variant="outlined">PROPIEDADES </Button>
      </Link>
    </Stack>
  );
};

export default Admin;
//armar el estado de todos los usuarios
//hacer el pedido a la ruta para traer los usuarios
//panel donde tenga botones que  me diga usuarios y propiedades, si voy a ususarios me tiene que renderizar a otro componente
// de usuarios en un tabla , creo los estados de usuario con usseEffect
//poner botones para eliminar usuarios
//
