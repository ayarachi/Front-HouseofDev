import React from "react";
import { Route, Routes } from "react-router";

import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";
import PropertyCard from "./components/PropertyDetail";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:propertyId" element={<PropertyCard />} />
        <Route path="/user/profile" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default App;
