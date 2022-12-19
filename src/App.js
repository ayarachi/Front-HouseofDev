import React from "react";
import { Route, Routes } from "react-router";

import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";
import PropertyCard from "./components/PropertyDetail";
import Register from "./components/Register";
import UserProfile from "./components/UserProfile";
import Admin from "./components/Admin";
import AdminProperties from "./components/AdminProperties";
import AddProperty from "./components/AddProperty";
import EditProperty from "./components/EditProperty";
import AdminUsers from "./components/AdminUsers";
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
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/properties" element={<AdminProperties />} />
        <Route path="/admin/addproperty" element={<AddProperty />} />
        <Route path="/admin/editproperty/:propertyId" element={<EditProperty />} />
        <Route path="/admin/users" element={<AdminUsers />} />
      </Routes>
    </>
  );
};

export default App;
