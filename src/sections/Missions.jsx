import React from 'react';
import './Missions.css';

const missions = [
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M2 20h20M4 20V10l8-8 8 8v10" />
        <path d="M9 20v-5h6v5" />
      </svg>
    ),
    titre: 'Conseil & Assistance AMO',
    desc: "Accompagnement stratégique des maîtres d'ouvrage dans la définition, le pilotage et le contrôle de leurs projets de construction.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    titre: "Maîtrise d'œuvre (MOE/AMOE)", // ✅ corrigé
    desc: 'Conception, direction des travaux et supervision technique pour garantir la qualité et la conformité des ouvrages réalisés.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3M11 8v3M11 14h.01" />
      </svg>
    ),
    titre: 'Études Préalables & Techniques',
    desc: "Faisabilité, avant-projets sommaires et définitifs, études techniques approfondies pour toutes typologies d'ouvrages.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titre: 'Inspection & Contrôle',
    desc: 'Contrôle non destructif des soudures, inspection de conformité et surveillance technique des travaux de construction métallique.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    titre: "Rédaction d'Offres Techniques",
    desc: "Élaboration de dossiers techniques et financiers complets pour les appels d'offres publics et privés.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" />
        <path d="M13 2v7h7" />
      </svg>
    ),
    titre: 'Management de Projet',
    desc: "Planification, coordination et suivi des projets de construction complexes, de la phase d'étude à la réception des ouvrages.",
  },
];

export default function Missions() {
  return (
    <section id="missions" className="missions">
      <div className="container">
        <p className="section-label">Ce Que Nous Faisons</p>
        <h2 className="section-title white">Nos Missions</h2>
        <div className="divider gold"></div>

        <div className="missions-grid">
          {missions.map((m, index) => (
            <div key={index} className="mission-card">
              <div className="mission-icon">{m.icon}</div>
              <h3>{m.titre}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}