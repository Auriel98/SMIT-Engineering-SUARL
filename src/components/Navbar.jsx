import React, { useState, useEffect } from 'react';
import './Navbar.css';

const LogoIcon = () => (
  <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" width="38" height="38">
    <polygon points="19,2 36,34 2,34" fill="#2a5f8f" />
    <polygon points="19,10 30,30 8,30" fill="#3a7ab5" opacity="0.6" />
    <polygon points="19,18 25,28 13,28" fill="#c8a84b" />
  </svg>
);

const navLinks = [
  { href: '#apropos', label: 'À Propos' },
  { href: '#missions', label: 'Missions' },
  { href: '#domaines', label: 'Domaines' },
  { href: '#expertises', label: 'Expertises' },
  { href: '#realisations', label: 'Réalisations' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        <LogoIcon />
        <div className="nav-logo-text">
          <span className="logo-main">SMIT ENGINEERING</span>
          <span className="logo-sub">SUARL · GABON</span>
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="nav-cta"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Contact
          </a>
        </li>
      </ul>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  );
}
