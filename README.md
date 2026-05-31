# Mbaye Services — Portfolio CV

Portfolio personnel moderne développé avec **Angular 21.2** (standalone components), présentant les compétences, expériences, projets et services d'un développeur fullstack / product designer.

## Stack Technique

| Technologie | Version |
|------------|---------|
| Angular | 21.2 (standalone) |
| TypeScript | 5.9 |
| RxJS | 7.8 |
| AOS (Animate On Scroll) | 2.3 |
| SCSS | — |
| Vitest | 4.0 |
| Build | `@angular/build:application` (Vite / esbuild) |

## Fonctionnalités

- **Design sombre premium** inspiré du thème Denzel — fonds dégradés, accent jaune `#CCFF00`
- **Navigation par sections** avec IntersectionObserver pour détecter la section active
- **Header dynamique** avec toggler burger responsive
- **Hero** avec photo de profil et titre animé
- **About** — spécialisations et image
- **Experience** — timeline des expériences professionnelles
- **Skills** — barres de compétences avec pourcentages
- **Projects** — grille de projets filtrée par catégorie
- **Partners** — logo clients / partenaires
- **Testimonials** — carousel d'avis avec navigation et fond personnalisé
- **Blog** — articles avec date, catégorie et extrait
- **Contact** — formulaire fonctionnel avec envoi via **Web3Forms API** et notifications **Toast**
- **Footer** — liens sociaux et copyright
- **Progress Nav** — navigation latérale avec progression
- **Splash Loader** — animation de chargement initiale
- **Toast notifications** — feedback visuel pour les actions utilisateur (succès/erreur)
- **Responsive** — adaptation mobile, tablette et desktop

## Sections du Portfolio

| Section | Component | Description |
|---------|-----------|-------------|
| Header | `header.component` | Navigation, toggler burger, scroll spy |
| Hero | `hero.component` | Présentation avec titre, sous-titre, photo |
| About | `about.component` | Bio, spécialisations, années d'expérience |
| Experience | `experience.component` | Timeline chronologique des postes |
| Skills | `skills.component` | Barres de progression par compétence |
| Projects | `projects.component` | Grille de projets avec filtres |
| Partners | `partners.component` | Logo des clients / partenaires |
| Testimonials | `testmodal.component` | Carousel d'avis avec navigation |
| Blog | `blog.component` | Liste d'articles de blog |
| Contact | `contact.component` | Formulaire de contact avec Web3Forms |
| Footer | `footer.component` | Copyright, liens sociaux |
| Toast | `toast.component` | Notifications flottantes |
| Progress Nav | `progress-nav.component` | Navigation latérale de progression |

## Structure du Projet

```
cv-mbaye/
├── public/                     # Assets statiques
├── scripts/
│   └── generate-env.mjs        # Génère src/env.ts depuis .env
├── src/
│   ├── app/
│   │   ├── components/         # 14 composants standalone
│   │   ├── directives/         # Directives Angular
│   │   ├── models/             # Interfaces TypeScript (PortfolioData, etc.)
│   │   ├── services/           # Services (PortfolioService, ToastService)
│   │   ├── utils/              # Utilitaires
│   │   ├── app.ts              # Composant racine
│   │   ├── app.html            # Template racine
│   │   ├── app.config.ts       # Configuration Angular
│   │   └── app.routes.ts       # Routes
│   ├── styles/
│   │   ├── variables.scss      # Couleurs, typo, breakpoints
│   │   ├── global.scss         # Styles globaux
│   │   ├── animations.scss     # Animations AOS
│   │   └── mixins.scss         # Mixins SCSS
│   ├── env.example.ts          # Template pour la clé API
│   ├── env.ts                  # Généré auto — gitignoré
│   ├── index.html              # HTML d'entrée
│   ├── main.ts                 # Point d'entrée Angular
│   └── styles.scss             # Style global
├── angular.json                # Configuration Angular CLI
├── package.json                # Dépendances et scripts
└── tsconfig*.json              # Configuration TypeScript
```

## Installation

```bash
git clone <repo-url>
cd cv-mbaye
npm install
```

## Configuration des Variables d'Environnement

1. Copie le fichier d'exemple :
```bash
cp .env.example .env
# ou crée .env à la racine
```

2. Renseigne ta clé API Web3Forms dans `.env` :
```env
VITE_WEB3FORMS_KEY=ta-clé-ici
```

> ⚠️ La clé est générée dans `src/env.ts` automatiquement via le script `generate-env.mjs` avant chaque `npm start` ou `npm build`. `src/env.ts` est gitignoré.

## Développement

```bash
npm start
# ou : ng serve
```

Ouvre `http://localhost:4200/`. Le rechargement est automatique.

> **Important** : utilise `npm start` plutôt que `ng serve` pour que la clé API soit générée depuis `.env`.

## Build

```bash
npm run build
```

Les fichiers de production sont dans `dist/cv-mbaye/browser/`.

## Tests

```bash
ng test
```

## Web3Forms — Formulaire de Contact

Le formulaire de contact utilise [Web3Forms](https://web3forms.com/) pour l'envoi d'emails.

1. Crée un compte sur Web3Forms
2. Récupère ta clé d'accès (`access_key`)
3. Ajoute-la dans `.env` : `VITE_WEB3FORMS_KEY=ta-clé`
4. Configure dans le dashboard Web3Forms l'adresse email de réception

## Déploiement

```bash
npm run build
# déploie dist/cv-mbaye/browser/ sur ton hébergeur (Vercel, Netlify, etc.)
```

## Auteur

**Mamadou Mbaye** — Product Designer & Fullstack Developer

## Licence

MIT
