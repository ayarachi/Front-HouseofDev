import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import Login from "./components/Login";
import PropertyCard from "./components/PropertyCard";


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:id" element={<PropertyCard />} />

      </Routes>
    </>
  );
};

export default App;
