import axios from "axios";
import React, { useState, useEffect } from "react";
import PropertiesCard from "./PropertiesCard";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Grid } from "@mui/material";
import styles from "./Properties.module.css";
import { grey } from "@mui/material/colors";
import { Container } from "@mui/system";

const opcionesOrden = {
  MENOR: "MENOR",
  MAYOR: "MAYOR",
  NADA: "NADA",
};

const NUM_ROOMS_NO_ESPECIFICADO = -1;

function Properties() {
  const [properties, setProperties] = useState([]);

  // Configuraciones de filtros
  const [order, setOrder] = useState(opcionesOrden.NADA);
  const [numRooms, setNumRooms] = useState(NUM_ROOMS_NO_ESPECIFICADO);

  useEffect(() => {
    axios
      .get("/api/properties")
      .then((res) => {
        // console.log(res);
        setProperties(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Conseguir los propiedades falló");
      });
  }, []);

  const onChangeOrder = (e) => {
    e.preventDefault();
    setOrder(e.target.value);
  };
  const onChangeNumRoomsFilter = (e) => {
    e.preventDefault();
    setNumRooms(e.target.value);
  };

  let filteredProperties = properties.slice();

  if (numRooms !== NUM_ROOMS_NO_ESPECIFICADO) {
    filteredProperties = filteredProperties.filter(
      (p) => p.numRooms === numRooms
    );
  }

  if (order === opcionesOrden.MAYOR) {
    filteredProperties.sort((a, b) => b.price - a.price);
  } else if (order === opcionesOrden.MENOR) {
    filteredProperties.sort((a, b) => a.price - b.price);
  }

  return (
    <>
      <h2> BIENVENIDOS A HOUSE OF DEV</h2>
      <div className={styles.container}></div>
      <Container sx={{ marginTop: "60px" }}></Container>

      <div>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            FILTRO PRECIO
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Age"
            onChange={onChangeOrder}
            value={order}
          >
            <MenuItem value={opcionesOrden.NADA}></MenuItem>
            <MenuItem value={opcionesOrden.MENOR}>MENOR</MenuItem>
            <MenuItem value={opcionesOrden.MAYOR}>MAYOR</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">
            CANTIDAD DE AMBIENTES
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            label="Age"
            onChange={onChangeNumRoomsFilter}
            value={numRooms}
          >
            <MenuItem value={NUM_ROOMS_NO_ESPECIFICADO}>Cualquier</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={2}>
        {filteredProperties.map((property) => (
          <Grid item xs={3}>
            <PropertiesCard key={property.id} property={property} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Properties;
