// Contact.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// 🔧 REMPLACEZ CES VALEURS PAR LES VÔTRES
const EMAILJS_SERVICE_ID  = 'service_zt3123f';
const EMAILJS_TEMPLATE_ID = 'template_2nr57ds';
const EMAILJS_PUBLIC_KEY  = 'nf-SuQ4_H8NmaK-kc';

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
    value: '+241 60 40 21 35',
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
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.5" fill="none" stroke="currentColor">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const formRef = useRef(null);

  const [form, setForm] = useState({
    prenom: '',
    nom: '',
    email: '',
    objet: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.message) {
      setErrorMsg('Veuillez remplir au moins le champ Email et Message.');
      return;
    }

    setStatus('sending');
    setErrorMsg('');

    // Les variables doivent correspondre aux {{variables}} de votre template EmailJS
    const templateParams = {
      from_prenom:  form.prenom,
      from_nom:     form.nom,
      from_email:   form.email,
      objet:        form.objet,
      message:      form.message,
      to_email:     'smit.engineering@gmail.com', // destinataire
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      setStatus('success');
      setForm({ prenom: '', nom: '', email: '', objet: '', message: '' });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMsg("Une erreur s'est produite. Veuillez réessayer.");
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const isDisabled = status === 'sending';

  return (
    <section id="contact" className="contact">
      <div className="container">
        <p className="section-label">Travaillons Ensemble</p>
        <h2 className="section-title">Nous Contacter</h2>
        <div className="divider" />
        <div className="contact-grid">

          {/* ── Coordonnées ── */}
          <div className="contact-info">
            <h3>Coordonnées</h3>
            {coordonnees.map((c, i) => (
              <div key={i} className="contact-item">
                <div className="contact-icon">{c.icon}</div>
                <div className="contact-item-text">
                  <p className="contact-item-label">{c.label}</p>
                  {c.href ? (
                    <p>
                      <a

                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                      >
                        {c.value}
                      </a>
                    </p>
                  ) : (
                    <p>{c.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── Formulaire ── */}
          <div className="contact-form-wrapper">
            <h3>Envoyez-Nous un Message</h3>

            <div className="contact-form" ref={formRef}>
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
                    disabled={isDisabled}
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
                    disabled={isDisabled}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre@email.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={isDisabled}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="objet">Objet</label>
                <select
                  id="objet"
                  name="objet"
                  value={form.objet}
                  onChange={handleChange}
                  disabled={isDisabled}
                >
                  <option value="">-- Sélectionnez un sujet --</option>
                  <option value="Étude de projet">Étude de projet</option>
                  <option value="Demande de devis">Demande de devis</option>
                  <option value="Partenariat">Partenariat</option>
                  <option value="Autre">Autre</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet ou votre demande..."
                  value={form.message}
                  onChange={handleChange}
                  disabled={isDisabled}
                  required
                />
              </div>

              {/* Messages de retour */}
              {errorMsg && (
                <p className="form-feedback form-error">{errorMsg}</p>
              )}
              {status === 'success' && (
                <p className="form-feedback form-success">
                  ✓ Votre message a bien été envoyé !
                </p>
              )}
              {status === 'error' && !errorMsg && (
                <p className="form-feedback form-error">
                  Une erreur s'est produite. Veuillez réessayer.
                </p>
              )}

              <button
                type="button"
                className={`btn-submit ${status === 'sending' ? 'btn-loading' : ''} ${status === 'success' ? 'btn-success' : ''}`}
                onClick={handleSubmit}
                disabled={isDisabled}
              >
                {status === 'sending' && '⏳ Envoi en cours...'}
                {status === 'success' && '✓ Message Envoyé'}
                {status === 'error'   && '✗ Échec — Réessayer'}
                {status === 'idle'    && 'Envoyer le Message'}
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}