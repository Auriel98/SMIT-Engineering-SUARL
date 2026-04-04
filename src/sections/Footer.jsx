import React from 'react';
import './Footer.css';

const links = [
  { label: 'À Propos', href: '#apropos' },
  { label: 'Missions', href: '#missions' },
  { label: 'Domaines', href: '#domaines' },
  { label: 'Expertises', href: '#expertises' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-logo">SMIT ENGINEERING</div>
      <p className="footer-tagline">SUARL · Gabon</p>
      <ul className="footer-nav">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={(e) => handleClick(e, l.href)}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <p className="footer-copy">
        © 2026 SMIT Engineering SUARL · Port-Gentil, Gabon<br />
        <span>Ingénierie de Précision · Conception d'Excellence</span>
      </p>
    </footer>
  );
}
