import axios from "axios";
import React, { useState, useEffect } from "react";

import PropertiesCard from "./PropertiesCard";

function Properties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get("/api/properties")
      .then((res) => {
        console.log(res);
        setProperties(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Conseguir los propiedades falló");
      });
  }, []);
  console.log(properties);
  return (
    <>
      {properties.map((property) => (
        <PropertiesCard key={property.id} property={property} />
      ))}
    </>
  );
}

export default Properties;
