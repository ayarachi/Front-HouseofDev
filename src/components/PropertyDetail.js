import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Typography from "@mui/material/Typography";

const PropertyDetails = () => {
  const { propertyId } = useParams();
  const [property, setProperty] = useState();

  useEffect(() => {
    axios
      .get(`/api/properties/${propertyId}`)
      .then((res) => {
        console.log(res);
        setProperty(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Conseguir la propiedad falló");
      });
  }, [propertyId]);

  if (!property) {
    return <CircularProgress />;
  }

  return (
    <Card sx={{ maxWidth: 1000 }}>
      <CardMedia
        component="img"
        height="500"
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
        <Typography gutterBottom variant="h7" component="div">
          {property.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PropertyDetails;
