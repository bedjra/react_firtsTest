import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Accueil from"./Composant/accueil";
function App() {
  return (
    <Router>
      <Routes>
        {/* Route pour la page de connexion */}
        <Route path="/" element={<Accueil />} />      </Routes>
    </Router>
  );
}
export default App;
