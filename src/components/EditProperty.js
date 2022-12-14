import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const EditProperty = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState("");
  const navigateTo = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [numRooms, setNumRooms] = useState("");
  const [description, setDescription] = useState("");

  const onChangeImagen = (e) => {
    setImage(e.target.value);
  };
  // 2: Dar estos mejor nombres (y actualiza los lugares en que estan llamados)
  const onChangeNombre = (e) => {
    setName(e.target.value);
  };
  const onChangeTipo = (e) => {
    setType(e.target.value);
  };
  const onChangePrecio = (e) => {
    setPrice(e.target.value);
  };
  const onChangeBarrio = (e) => {
    setNeighborhood(e.target.value);
  };
  const onChangeAmbientes = (e) => {
    setNumRooms(e.target.value);
  };
  const onChangeDescripcion = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`/api/properties/${propertyId}`)
      .then((res) => {
        console.log(res);

        setImage(res.data.image);
        setName(res.data.name);
        setType(res.data.type);
        setPrice(res.data.price);
        setNeighborhood(res.data.neighborhood);
        setNumRooms(res.data.numRooms);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.error(err);
        alert("Editar la propiedad falló");
      });
  }, []);

  const editarPropiedad = (e) => {
    e.preventDefault();
    const property = {
      image,
      name,
      type,
      price,
      neighborhood,
      numRooms,
      description,
    };
    axios
      .put(`/api/properties/${propertyId}`, property)
      .then((res) => res.data)
      .then((property) => {
        navigateTo(`/properties/${propertyId}`);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display : "flex",
        flexDirection: "column",
        alignItems: "center"

      }}
      noValidate
      autoComplete="off"
    >
      
        <TextField
          onChange={onChangeImagen}
          label="Imagen"
          variant="outlined"
          value={image}
        />
        {/* 3: Usar "value" en lugar de "defaultValue" */}
        <TextField
          value={name}
          onChange={onChangeNombre}
          label="Nombre"
          variant="outlined"
        />
        <TextField
          value={type}
          onChange={onChangeTipo}
          label="Typo"
          variant="outlined"
        />
        <TextField
          value={price}
          onChange={onChangePrecio}
          label="Precio"
          variant="outlined"
        />
        <TextField
          value={neighborhood}
          onChange={onChangeBarrio}
          label="Barrio"
          variant="outlined"
        />
        <TextField
          value={numRooms}
          onChange={onChangeAmbientes}
          label="N de habitaciones"
          variant="outlined"
        />

        <TextField
          value={description}
          onChange={onChangeDescripcion}
          label="Descripcion"
          multiline
          rows={4}
        />
      
      <Button onClick={editarPropiedad} variant="text">
        {" "}
        Modificar propiedad
      </Button>
    </Box>
  );
};

export default EditProperty;
