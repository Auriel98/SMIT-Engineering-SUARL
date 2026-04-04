import React from 'react';
import './Domaines.css';

const groupes = [
  {
    titre: 'Construction',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3" />
        <path d="M9 21V9h6v12" />
      </svg>
    ),
    items: [
      'Structures métalliques',
      'Chaudronnerie industrielle',
      'Soudure & assemblage',
      'Tuyauterie industrielle',
    ],
  },
  {
    titre: 'Industrie',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <circle cx="12" cy="7" r="2" />
        <path d="M12 9v9M8 12l4 3 4-3" />
      </svg>
    ),
    items: [
      'Infrastructures pétrolières onshore',
      'Plateformes & terminaux',
      'Installations industrielles',
      'Études de sécurité',
    ],
  },
  {
    titre: 'Transport',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M3 12h18M3 6l9-3 9 3M3 18l9 3 9-3" />
      </svg>
    ),
    items: [
      'Infrastructures routières',
      'Infrastructures ferroviaires',
      'Infrastructures portuaires',
      'Infrastructures maritimes',
    ],
  },
];

export default function Domaines() {
  return (
    <section id="domaines" className="domaines">
      <div className="container">
        <p className="section-label">Secteurs d'Activité</p>
        <h2 className="section-title">Nos Domaines d'Intervention</h2>
        <div className="divider" />
        <div className="domaines-wrapper">
          {groupes.map((g) => (
            <div key={g.titre} className="domaine-group">
              <div className="domaine-header">
                {g.icon}
                <span>{g.titre}</span>
              </div>
              <ul className="domaine-items">
                {g.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
