import React from 'react';
import './Apropos.css';

const valeurs = [
  { titre: 'Intégrité', desc: 'Transparence et honnêteté dans toutes nos interventions' },
  { titre: 'Proactivité', desc: 'Anticiper les défis pour mieux servir nos clients' },
  { titre: 'Discipline', desc: 'Rigueur et engagement sur chaque projet' },
  { titre: 'Éthique', desc: 'Respect des normes, des personnes et de l\'environnement' },
  { titre: 'Sens du Client', desc: 'Votre satisfaction est notre mesure de succès', full: true },
];

export default function Apropos() {
  return (
    <section id="apropos" className="apropos">
      <div className="container">
        <div className="apropos-grid">
          <div className="apropos-text">
            <p className="section-label">À Propos</p>
            <h2 className="section-title">SMIT Engineering SUARL</h2>
            <div className="divider" />
            <p>
              SMIT Engineering SUARL est une société gabonaise spécialisée dans les études,
              la conception et le dimensionnement des structures métalliques et des infrastructures
              de transport.
            </p>
            <p>
              Basée à Port-Gentil, nous accompagnons les acteurs publics et privés dans la
              réalisation de leurs projets d'ingénierie en offrant une expertise technique de haut
              niveau, adaptée aux réalités locales et aux standards internationaux.
            </p>
            <p>
              Notre équipe pluridisciplinaire met à votre service sa maîtrise des normes de
              construction métallique, des infrastructures pétrolières, portuaires, ferroviaires
              et routières.
            </p>
          </div>

          <div className="apropos-valeurs">
            <p className="section-label">Nos Valeurs</p>
            <h2 className="section-title" style={{ fontSize: '1.6rem' }}>Ce Qui Nous Définit</h2>
            <div className="divider" />
            <div className="valeurs-grid">
              {valeurs.map((v) => (
                <div key={v.titre} className={`valeur-card ${v.full ? 'full' : ''}`}>
                  <h4>{v.titre}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
