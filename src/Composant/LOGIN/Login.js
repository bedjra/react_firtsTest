import React from "react";
import "./Login.css";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Ajoute ici une logique de connexion si nécessaire
    navigate("/products"); // Redirection vers la liste des produits
  };

  return (
    <div>
      <h1>Connexion</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" placeholder="Entrez votre email" required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" id="password" placeholder="Entrez votre mot de passe" required />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
