import React from 'react';
import './Expertises.css';

const expertises = [
  {
    titre: 'Expertise en Conseil',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    titre: 'Expertise en Inspection',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path d="M2 12s3-8 10-8 10 8 10 8-3 8-10 8-10-8-10-8z" />
      </svg>
    ),
  },
  {
    titre: 'Contrôle & Conformité',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    titre: 'Expertise Technique',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    titre: 'Gestion de Projet Construction',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
];

export default function Expertises() {
  return (
    <section id="expertises" className="expertises">
      <div className="container">
        <p className="section-label">Savoir-Faire Technique</p>
        <h2 className="section-title">Nos Expertises</h2>
        <div className="divider" />
        <div className="expertises-grid">
          {expertises.map((e) => (
            <div key={e.titre} className="expertise-card">
              <div className="expertise-icon">{e.icon}</div>
              <h3>{e.titre}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
