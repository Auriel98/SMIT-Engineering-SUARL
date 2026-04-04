# SMIT Engineering SUARL – Site Web React

Site vitrine professionnel pour SMIT Engineering SUARL, société gabonaise spécialisée dans les structures métalliques et infrastructures de transport.

---

## 🚀 Installation & Lancement

### Prérequis
- Node.js v16+ ([télécharger](https://nodejs.org))
- npm v8+

### Étapes

```bash
# 1. Créer le projet Create React App
npx create-react-app smit-engineering
cd smit-engineering

# 2. Supprimer les fichiers par défaut inutiles
rm src/App.css src/App.test.js src/logo.svg
rm src/reportWebVitals.js src/setupTests.js

# 3. Copier tous les fichiers du projet dans le dossier src/
# (remplacer le contenu existant par les fichiers fournis)

# 4. Lancer en mode développement
npm start
# → Ouvre automatiquement http://localhost:3000

# 5. Build pour la production
npm run build
# → Génère le dossier /build optimisé pour le déploiement
```

---

## 📁 Structure des Fichiers

```
smit-engineering/
├── public/
│   └── index.html              ← HTML principal avec polices Google
├── src/
│   ├── styles/
│   │   └── global.css          ← Variables CSS, reset, utilitaires globaux
│   ├── components/
│   │   ├── Navbar.jsx          ← Navigation fixe avec menu mobile hamburger
│   │   └── Navbar.css
│   ├── sections/
│   │   ├── Hero.jsx            ← Section d'accueil plein écran
│   │   ├── Hero.css
│   │   ├── Apropos.jsx         ← Présentation société + valeurs
│   │   ├── Apropos.css
│   │   ├── Missions.jsx        ← 6 cartes de missions
│   │   ├── Missions.css
│   │   ├── Domaines.jsx        ← 3 domaines : Construction / Industrie / Transport
│   │   ├── Domaines.css
│   │   ├── Expertises.jsx      ← 5 cartes expertises techniques
│   │   ├── Expertises.css
│   │   ├── Realisations.jsx    ← Section portfolio (à compléter)
│   │   ├── Realisations.css
│   │   ├── Contact.jsx         ← Coordonnées + formulaire de contact
│   │   ├── Contact.css
│   │   ├── Footer.jsx          ← Pied de page
│   │   └── Footer.css
│   ├── App.jsx                 ← Composant racine, assemble toutes les sections
│   └── index.js                ← Point d'entrée React
├── package.json
├── .gitignore
└── README.md
```

---

## 🎨 Design System

| Variable         | Valeur      | Usage                     |
|------------------|-------------|---------------------------|
| `--navy-dark`    | `#080f1e`   | Fond hero, navbar, footer |
| `--navy`         | `#0d1f3c`   | Titres, icônes            |
| `--navy-mid`     | `#132a50`   | Cartes missions           |
| `--steel`        | `#2a5f8f`   | Accents bleu principal    |
| `--steel-light`  | `#3a7ab5`   | Hover, highlights         |
| `--accent-gold`  | `#c8a84b`   | Accents dorés, labels     |
| `--white`        | `#f5f7fa`   | Fond clair                |
| `--gray-light`   | `#e8ecf2`   | Fonds cartes claires      |
| `--gray-mid`     | `#b0b8c8`   | Textes secondaires        |

**Polices :**
- Titres : `Oswald` (700, 600, 400)
- Corps : `Lato` (300, 400, 700)

---

## 📬 Formulaire de Contact

Le formulaire est actuellement en mode **simulation locale** (log console).  
Pour l'activer en production, connectez-le à un service comme :

- **EmailJS** (gratuit, sans backend) : [emailjs.com](https://www.emailjs.com)
- **Formspree** : [formspree.io](https://formspree.io)
- **API backend** Node.js / Express avec Nodemailer

Exemple avec EmailJS dans `Contact.jsx` :
```js
import emailjs from '@emailjs/browser';

emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
  .then(() => setSent(true));
```

---

## 🌐 Déploiement

### Netlify (recommandé, gratuit)
```bash
npm run build
# Glisser-déposer le dossier /build sur netlify.com/drop
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Hébergement traditionnel (FTP)
```bash
npm run build
# Uploader le contenu du dossier /build sur votre serveur
```

---

## 📞 Contact SMIT Engineering

- **Téléphones :** 074 15 61 22 / 060 40 21 35
- **Email :** smit.engineering@gmail.com
- **Site :** www.smitengineering.com
- **Siège :** Port-Gentil, Gabon

---

*© 2026 SMIT Engineering SUARL · Ingénierie de Précision · Conception d'Excellence*
"# SMIT-Engineering-SUARL" 
