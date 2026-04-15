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

const coordonnees = [
  {
    label: 'Téléphone',
    value: '+241 74 15 61 22',
    href: 'https://wa.me/24174156122',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Téléphone',
    value: '+241 60 40 21 35',
    href: 'https://wa.me/24160402135',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'contact@smitengineering.ga',
    href: 'mailto:contact@smitengineering.ga',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'directgene@smitengineering.ga',
    href: 'mailto:directgene@smitengineering.ga',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Siège Social',
    value: 'Port-Gentil, Gabon',
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Colonne 1 : Identité */}
        <div className="footer-col footer-brand">
          <div className="footer-logo">SMIT ENGINEERING</div>
          <p className="footer-tagline">SUARL · Gabon</p>
          <p className="footer-description">
            Bureau d'études pluridisciplinaire spécialisé en ingénierie industrielle, 
            mécanique et de procédés au service des acteurs du secteur pétrolier et industriel gabonais.
          </p>
        </div>

        {/* Colonne 2 : Navigation */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigation</h4>
          <ul className="footer-nav">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => handleClick(e, l.href)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne 3 : Coordonnées */}
        <div className="footer-col">
          <h4 className="footer-col-title">Coordonnées</h4>
          <ul className="footer-contact-list">
            {coordonnees.map((c, i) => (
              <li key={i} className="footer-contact-item">
                <span className="footer-contact-icon">{c.icon}</span>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('https') ? '_blank' : undefined}
                    rel={c.href.startsWith('https') ? 'noopener noreferrer' : undefined}
                    className="footer-contact-value"
                  >
                    {c.value}
                  </a>
                ) : (
                  <span className="footer-contact-value">{c.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Barre de bas de page */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © 2026 SMIT Engineering SUARL · Port-Gentil, Gabon
        </p>
        <p className="footer-copy-sub">
          Ingénierie de Précision · Conception d'Excellence
        </p>
      </div>
    </footer>
  );
}