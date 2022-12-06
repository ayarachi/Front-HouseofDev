import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const AdminProperties = () => {
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

  const handleSubmit = (id) => {
    axios
      .delete(`/api/properties/${id}`)
      .then(() => alert(" Propiedad eliminada"))
      .catch((err) => console.log(" no se elimino propiedad", err));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>nombre</th>
          <th>typo</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {properties.map((property) => {
          return (
            <tr>
              <td>{property.id}</td>
              <td>{property.name}</td>
              <td>{property.type}</td>
              <td>
                <Button> modificar </Button>
              </td>
              <td>
                {" "}
                <Button onClick={() => handleSubmit(property.id)}>
                  {" "}
                  eliminar{" "}
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AdminProperties;
