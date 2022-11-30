import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const PropertyCard = ({ property }) => {
  console.log("propertyCard ", property);
  return (<div>{property.name}</div>)
    
  
};

export default PropertyCard;
