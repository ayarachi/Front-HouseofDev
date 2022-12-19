import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const AddProperty = () => {
  const navigateTo = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [numRooms, setNumRooms] = useState("");
  const [description, setDescription] = useState("");

  const imagen = (e) => {
    setImage(e.target.value);
  };

  const nombre = (e) => {
    setName(e.target.value);
  };
  const tipo = (e) => {
    setType(e.target.value);
  };
  const precio = (e) => {
    setPrice(e.target.value);
  };
  const barrio = (e) => {
    setNeighborhood(e.target.value);
  };
  const ambientes = (e) => {
    setNumRooms(e.target.value);
  };
  const descripcion = (e) => {
    setDescription(e.target.value);
  };
  const agregarPropiedad = (e) => {
    e.preventDefault();
    const property = { image, name, type, price, neighborhood, numRooms,description };
    axios
      .post("/api/properties/", property)
      .then((res) => res.data)
      .then((property) => {
        navigateTo(`/properties/${property.id}`);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      {" "}
      <div>
        <TextField
          onChange={imagen}
          id="outlined-basic"
          label="Imagen"
          variant="outlined"
        />
        <TextField
          onChange={nombre}
          id="outlined-basic"
          label="Nombre"
          variant="outlined"
        />
        <TextField
          onChange={tipo}
          id="outlined-basic"
          label="Typo"
          variant="outlined"
        />
        <TextField
          onChange={precio}
          id="outlined-basic"
          label="Precio"
          variant="outlined"
        />
        <TextField
          onChange={barrio}
          id="outlined-basic"
          label="Barrio"
          variant="outlined"
        />
        <TextField
          onChange={ambientes}
          id="outlined-basic"
          label="N de habitaciones"
          variant="outlined"
        />

        <TextField
          onChange={descripcion}
          id="outlined-multiline-static"
          label="Descripcion"
          multiline
          rows={4}
        />
      </div>
      <Button onClick={agregarPropiedad} variant="text"> Crear propiedad</Button>
      
    </Box>
  );
};

export default AddProperty;
