import React from "react";
import { Link } from "react-router-dom";
import "./erreur.css"; // Ajoute le style

const Erreur = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">404</h1>
      <p className="error-message">Oups ! La page que vous cherchez n'existe pas.</p> <br />
      <Link to="/" className="error-button">Retour à l'accueil</Link>
    </div>
  );
};

export default Erreur;