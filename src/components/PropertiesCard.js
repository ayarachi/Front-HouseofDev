import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";

const PropertiesCard = ({ property }) => {
  console.log("propertyCard ", property);

  const handleFavorite = () => {
    const usuario = JSON.parse(localStorage.getItem("user"));
    console.log("se agregó a favoritos");

    axios
      .post("api/favorites", { propertyId: property.id, userId: usuario.id })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Agregar a favoritos  falló");
      });
  };

  const handleDeleteFav = () => {
    axios
      .delete(`/api/favorites/${property.id}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Eliminar favoritos  falló");
      });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={property.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {property.name}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {property.neighborhood}
        </Typography>
        <Typography gutterBottom variant="h7" component="div">
          {property.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Fab onClick={handleFavorite} aria-laFabel="like">
          <FavoriteIcon />
        </Fab>
        <Fab onClick={handleDeleteFav} aria-laFabel="like">
          <FavoriteIcon />
        </Fab>
        <Link to={`/properties/${property.id}`}>
          <Button type="button" size="small">
            VER MAS
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PropertiesCard;
