import React from "react";
import Login from "./Composant/LOGIN/Login";
import Produit from "./Composant/LIST/Produit";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Produit />} />
      </Routes>
    </Router>
  );
};

export default App;
