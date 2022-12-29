import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertiesCard from "./PropertiesCard";
import { Grid } from "@mui/material";

const Favorites = () => {
  const usuario = JSON.parse(localStorage.getItem("user"));
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/favorites/${usuario.id}`)
      .then((res) => {
        console.log(res.data);
        setFavorites(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Conseguir los favoritos falló");
      });
  }, []);
//window location relow, dentro del boton de eliminar
  return (
    <div>
      <h2> Mis favoritos </h2>
      <Grid container spacing={2}>
        {favorites.map((favorite) => (
          <Grid item xs={3}>
            <PropertiesCard
              key={favorite.id}
              property={favorite.Property}
              mostrarBotonEliminar
              mostrarBotonVermas={false}
              mostrarBotonFav={false}
              favoriteId={favorite.id}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Favorites;
