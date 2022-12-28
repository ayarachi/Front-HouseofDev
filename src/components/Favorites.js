import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertiesCard from "./PropertiesCard";

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

  return <div>  Tus favoritos
  {favorites.map((favorite) => (
    <PropertiesCard key={favorite.id} property={favorite.Property} />
  ))}
  </div>

};

export default Favorites;
