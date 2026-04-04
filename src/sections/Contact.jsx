import React, { useState } from 'react';
import './Contact.css';

const coordonnees = [
  {
    label: 'Téléphones',
    value: '+241 74 15 61 22',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Téléphones',
    value: '060 40 21 35',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'smit.engineering@gmail.com',
    href: 'mailto:smit.engineering@gmail.com',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Site Web',
    value: 'www.smitengineering.com',
    href: 'http://www.smitengineering.com',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
  },
  {
    label: 'Siège Social',
    value: 'Port-Gentil, Gabon',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    objet: '',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.email || !form.message) return;
    // In production, connect to a backend/email API
    console.log('Form submitted:', form);
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ prenom: '', nom: '', email: '', objet: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-label">Travaillons Ensemble</p>
        <h2 className="section-title">Nous Contacter</h2>
        <div className="divider" />
        <div className="contact-grid">

          <div className="contact-info">
            <h3>Coordonnées</h3>
            {coordonnees.map((c) => (
              <div key={c.label} className="contact-item">
                <div className="contact-icon">{c.icon}</div>
                <div className="contact-item-text">
                  <p className="contact-item-label">{c.label}</p>
                  {c.href ? (
                    <p><a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{c.value}</a></p>
                  ) : (
                    <p>{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="contact-form-wrapper">
            <h3>Envoyez-Nous un Message</h3>
            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="prenom">Prénom</label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    placeholder="Votre prénom"
                    value={form.prenom}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nom">Nom</label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    placeholder="Votre nom"
                    value={form.nom}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="objet">Objet</label>
                <select
                  id="objet"
                  name="objet"
                  value={form.objet}
                  onChange={handleChange}
                >
                  <option value="">-- Sélectionnez un sujet --</option>
                  <option value="etude">Étude de projet</option>
                  <option value="devis">Demande de devis</option>
                  <option value="partenariat">Partenariat</option>
                  <option value="autre">Autre</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="button" className="btn-submit" onClick={handleSubmit}>
                {sent ? '✓ Message Envoyé' : 'Envoyer le Message'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
