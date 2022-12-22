import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/users/usuario")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.error(err);
        alert("Conseguir los usuarios falló");
      });
  }, []);
  console.log(users);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Correo</th>
            <th>Telefono</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                 <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <Button> modificar </Button>
                </td>
                <td>
                  {" "}
                  <Button> eliminar </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default AdminUsers;
