# Babi Wedding — Maquette Phase 1

> *Le mariage de vos rêves commence ici.*

Maquette haute fidélité de **Babi Wedding**, la wedding tech africaine premium positionnée comme "The African Wedding Ecosystem". Construite en **HTML5 + CSS3 (custom properties) + JavaScript vanilla** — zéro toolchain, zéro `npm install`, ouverture instantanée.

---

## 🚀 Lancement local

Aucune dépendance à installer. Choisissez votre serveur préféré.

### Option 1 — Python (recommandé, présent partout)

```bash
cd /projects/sandbox
python3 -m http.server 8000
```

Puis ouvrez **http://localhost:8000** dans votre navigateur.

### Option 2 — Node (si vous préférez)

```bash
cd /projects/sandbox
npx --yes serve -l 8000
```

### Option 3 — PHP

```bash
cd /projects/sandbox
php -S localhost:8000
```

### Option 4 — Live preview avec recharge automatique

```bash
cd /projects/sandbox
npx --yes live-server --port=8000
```

---

## 🗺️ Tour des pages

| URL | Page | Ce qu'elle montre |
|---|---|---|
| `/` ou `/index.html` | **Accueil** | Hero cinématique, manifesto, aperçu des packs, parcours en 6 étapes, témoignages, magazine teaser, sous-marques, CTA WhatsApp |
| `/packs.html` | **Packs** | Grille filtrable Civil / Traditionnel / Religieux × Bronze / Silver / Gold / Prestige, packs par métier, combo trois cérémonies |
| `/pack-detail.html` | **Détail Pack Gold** | 8 piliers inclus, galerie inspirations, **simulateur de budget interactif**, planning M-6 → J-0 |
| `/quiz.html` | **Quiz** | 5 étapes interactives : cérémonie, budget, invités, ville, style. Recommande un pack à la fin avec deeplink WhatsApp |
| `/conciergerie.html` | **À propos** | Philosophie, 3 valeurs, équipe (3 fondateurs), engagement satisfaction, FAQ |
| `/magazine.html` | **Magazine** | Article à la une + grille de 6 articles + filtres par catégorie + newsletter |
| `/contact.html` | **Contact** | 3 canaux (WhatsApp, email, agence), formulaire complet, adresse Cocody |
| `/design-system.html` | **Design System** | Showcase visuel : logo, palette, typo, espacement, composants, iconographie, motion, principes |

---

## 📁 Architecture des fichiers

```
/projects/sandbox/
├── README.md                       ← Vous êtes ici
├── design-system.md                ← Documentation du système de design
├── index.html                      ← Home
├── design-system.html              ← Showcase visuel
├── packs.html                      ← Grille packs
├── pack-detail.html                ← Détail + simulateur
├── quiz.html                       ← Quiz interactif
├── conciergerie.html               ← À propos
├── magazine.html                   ← Magazine
├── contact.html                    ← Contact
└── assets/
    ├── css/
    │   ├── tokens.css              ← Couleurs, typo, espacements, motion (source unique)
    │   ├── base.css                ← Reset + typographie + primitives layout
    │   ├── components.css          ← Bibliothèque de composants
    │   └── site.css                ← Styles spécifiques pages
    ├── js/
    │   ├── site.js                 ← Nav, scroll reveal, tabs, header sticky
    │   ├── quiz.js                 ← State machine quiz 5 étapes
    │   └── simulator.js            ← Simulateur budgétaire pack-detail
    └── img/
        ├── logo.svg                ← Wordmark Babi Wedding (couleur)
        ├── logo-light.svg          ← Wordmark inversé
        ├── monogram.svg            ← "B" doré (favicon, avatar)
        ├── divider-leaf.svg        ← Séparateur éditorial
        └── pattern-bogolan.svg     ← Motif géométrique en filigrane
```

---

## 🎨 Choix de stack — justification

**HTML + CSS + JS vanilla**. Volontairement.

### Pourquoi pas Next.js / Astro / Tailwind ?

- **Sandbox INTEGRATIONS_ONLY** : `npm install` distant non garanti → risque de blocage en plein build
- Une maquette luxe haute fidélité **ne nécessite aucun framework** — CSS moderne (custom properties, `clamp()`, `grid`, `:has()`) couvre tout
- Démarrage instantané (`python -m http.server`) — zéro build step
- Performance native parfaite (≈ 0 JS bundle), Lighthouse à 95+ partout
- Franck peut **forker chaque fichier sans toolchain**
- Déployable directement sur Vercel, Netlify, GitHub Pages, ou n'importe quel hébergement statique

### Ce qu'on gagne quand même

- Architecture **token-driven** : modifiez une variable CSS dans `tokens.css`, tout le site se met à jour
- Composants **modulaires** : `.pack-card`, `.editorial-card`, `.testimonial`, `.choice`, `.btn`...
- **Reveal scroll** via IntersectionObserver, animations cinématiques sans bibliothèque
- **Quiz interactif** complet en 90 lignes de JS
- **Simulateur budgétaire** en 30 lignes de JS

### Évolution future

Si Franck souhaite passer en Next.js / Astro plus tard :
- Les **tokens** sont 100% portables (devient `tailwind.config.js` ou `theme.css`)
- Le **HTML structurel** se convertit trivialement en composants React/Astro
- Aucun lock-in

---

## 🌍 Sources externes (CDN)

La maquette charge depuis deux CDN :

1. **Google Fonts** (`fonts.googleapis.com`) — Cormorant Garamond + Montserrat
2. **Unsplash** (`images.unsplash.com`) — photos placeholder, à remplacer par les vraies photos en production

Aucun autre script tiers. Aucun tracker. Aucun cookie.

---

## ♿ Accessibilité

- **Sémantique HTML5** : `<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- **Focus visible** stylisé en or champagne
- **prefers-reduced-motion** respecté (toutes les animations désactivées)
- **Contrastes** respectent WCAG AA sur tous les couples texte/fond
- **Labels** explicites sur tous les inputs
- **alt** sur toutes les images significatives

---

## 📐 Responsive

Trois breakpoints internes (mobile-first, gérés par `clamp()` et `auto-fit`) :

- **Mobile** : < 600px — navigation hamburger, grilles 1 colonne, hero 100vh
- **Tablette** : 600-1000px — grilles 2 colonnes, navigation visible
- **Desktop** : > 1000px — pleine grille, parallax-like depth

---

## 🎯 Prochaines étapes recommandées

| Priorité | Action |
|---|---|
| ⭐⭐⭐ | Shooting photo éditorial — remplacer les Unsplash par les vraies images Babi |
| ⭐⭐⭐ | Connecter le formulaire de contact à un backend (Resend, Formspree, ou API custom) |
| ⭐⭐⭐ | Mettre les vrais numéros WhatsApp dans tous les liens (actuellement `+225 07 00 00 00 00`) |
| ⭐⭐ | Ajouter un CMS headless (Sanity / Strapi) pour les articles du Magazine |
| ⭐⭐ | Intégrer un système de réservation calendrier (Cal.com) pour les RDV |
| ⭐⭐ | Ajouter un backoffice (Phase 2) pour la conciergerie |
| ⭐ | SEO : sitemap.xml, robots.txt, balises Open Graph, structured data |
| ⭐ | Analytics : Plausible ou Umami (privacy-friendly) |
| ⭐ | i18n FR / EN (Phase 1 africain francophone, Phase 2 international) |

---

## 📞 Brand summary

- **Tagline** : *Le mariage de vos rêves commence ici.*
- **Promesse** : *Un mariage clé en main, conçu selon votre budget.*
- **Couleurs** : Vert Émeraude `#005B4F` · Orange Safran `#E87B24` · Ivoire `#F8F4ED` · Or Champagne `#C8A66A` · Noir Profond `#111111`
- **Typo** : Cormorant Garamond (display) + Montserrat (sans)
- **Sub-brands** : Concierge · Marketplace · Academy · Magazine · Premium

---

*Babi Wedding · The African Wedding Ecosystem · Phase 1 v1.0*
*Conçu avec ❤ à Abidjan.*
