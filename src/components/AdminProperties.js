import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import AddProperty from "./AddProperty";
import { Link } from "react-router-dom";

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
    <>
      <Link to="/admin/addproperty">
        <Button> crear propiedad </Button>
      </Link>
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
              <tr key={property.id}>
                <td>{property.id}</td>
                <td>{property.name}</td>
                <td>{property.type}</td>
                <td>
                  <Link to = {`/admin/editproperty/${property.id}`}>
                  <Button > modificar </Button>
                  </Link>
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
    </>
  );
};

export default AdminProperties;
