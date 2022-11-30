import React, { useState, useEffect } from "react";
//import { Grid, Typography, Button, styled, Box } from "@mui/material";
import axios from "axios";
import PropertyCard from "./ProperetiesCard";

function Home() {
  const [property, setProperty] = useState([]);
  
  useEffect(() => {
    axios
      .get("/api/properties")
      .then((res) => {
        setProperty(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Conseguir los propiedades falló");
      });
  }, []);
  console.log(property)
  return <>
  {property.map((property) => (
    <PropertyCard property={property}/> 
  ))}</>
}

export default Home;
