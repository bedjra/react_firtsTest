import React from 'react';
import './accueil.css';

function App() {
  return (
    <div className="app-container">
      <header className="content-wrapper">
        <div className="image-container">
          <img src="images/me.jpg" alt="Profil" className="profile-image" />
        </div>
        <div className="text-container">
          <h1 className="title">Bonjour, je suis <span className="highlight">Armel BEDJRA</span> !</h1>
          <p className="description">
            Développeur web avec <strong>1 ans d'expérience</strong>, je suis spécialisé dans la conception et le développement
            d'applications performantes. Je crée des interfaces modernes et dynamiques en utilisant des technologies telles que 
            <span className="highlight"> Angular</span> et <span className="highlight"> Spring Boot</span>. J'aime relever des défis techniques 
            et collaborer sur des projets innovants.
          </p>
         
          <p className="contact">
            📧 Contactez-moi : 
            <a href="mailto:armelbedjra12@gmail.com" className="email-link"> armelbedjra12@gmail.com</a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
