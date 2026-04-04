import React from 'react';
import './Realisations.css';

export default function Realisations() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="realisations" className="realisations">
      <div className="container">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title white">Nos Réalisations</h2>
        <div className="divider gold" />
        <div className="realisations-coming">
          <p>
            Notre portfolio de réalisations est en cours de constitution.<br />
            Nous vous invitons à nous contacter directement pour en savoir plus
            sur nos références et projets réalisés au Gabon.
          </p>
          <button className="btn btn-outline" onClick={() => scrollTo('#contact')}>
            Demander Nos Références
          </button>
        </div>
      </div>
    </section>
  );
}
