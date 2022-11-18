import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import Login from "./components/Login";


const App = () => {
  
  return (
    <div>
      <Navbar />
     
      <Routes>  
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
};
export default App;


