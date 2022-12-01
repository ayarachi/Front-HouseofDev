import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const PropertiesCard = ({ property }) => {
  console.log("propertyCard ", property);
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
        <Button size="small">Share</Button>
        <Link to={`/properties/${property.id}`}>
          <Button size="small">VER MAS</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PropertiesCard;
