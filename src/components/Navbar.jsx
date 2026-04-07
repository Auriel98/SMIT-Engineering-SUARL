import React, { useState, useEffect } from 'react';
import './Navbar.css';

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
        <img src="/Logo_SMIT.png" alt="SMIT Logo" className="nav-logo-img" />
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

        {/* ✅ Correction ici */}
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