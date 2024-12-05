import React from "react";
import "./Produit.css";
const Produit = () => {
  // Exemple de données des produits
  const products = [
    { id: 1, nom: "Produit A", quantite: 50, destination: "Paris", charges: "10kg" },
    { id: 2, nom: "Produit B", quantite: 30, destination: "Lyon", charges: "8kg" },
    { id: 3, nom: "Produit C", quantite: 20, destination: "Marseille", charges: "5kg" },
  ];

  return (
    <div>
      <h1>Liste des Produits</h1>
      <table border="1" style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Quantité</th>
            <th>Destination</th>
            <th>Charges</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nom}</td>
              <td>{product.quantite}</td>
              <td>{product.destination}</td>
              <td>{product.charges}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Produit;
