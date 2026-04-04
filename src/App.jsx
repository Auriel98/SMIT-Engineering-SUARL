import React from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Apropos from './sections/Apropos';
import Missions from './sections/Missions';
import Domaines from './sections/Domaines';
import Expertises from './sections/Expertises';
import Realisations from './sections/Realisations';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Apropos />
        <Missions />
        <Domaines />
        <Expertises />
        <Realisations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
