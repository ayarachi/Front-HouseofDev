import React from "react";
import { Route, Routes } from "react-router";

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
import SearchResult from "./components/SearchResult";
import Favorite from "./components/Favorites";
import { Container } from "@mui/system";
const App = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: "15px" }}>
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/properties/:propertyId" element={<PropertyCard />} />
          <Route path="/busqueda" element={<SearchResult />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/properties" element={<AdminProperties />} />
          <Route path="/admin/addproperty" element={<AddProperty />} />
          <Route
            path="/admin/editproperty/:propertyId"
            element={<EditProperty />}
          />
          <Route path="/admin/users" element={<AdminUsers />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
