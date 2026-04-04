import React from 'react';
import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-content">
        <p className="hero-tagline">
          Ingénierie de Précision · Conception d'Excellence · Gabon
        </p>
        <h1 className="hero-title">
          Structures Métalliques<br />
          <span>&amp; Infrastructures</span><br />
          de Transport
        </h1>
        <p className="hero-subtitle">
          Études, conception et expertise au service des projets industriels,
          portuaires, ferroviaires et routiers au Gabon et en Afrique Centrale.
        </p>
        <div className="hero-btns">
          <button className="btn btn-primary" onClick={() => scrollTo('#domaines')}>
            Nos Domaines
          </button>
          <button className="btn btn-outline" onClick={() => scrollTo('#contact')}>
            Nous Contacter
          </button>
        </div>
      </div>
      <div className="hero-wave" aria-hidden="true" />
    </section>
  );
}
