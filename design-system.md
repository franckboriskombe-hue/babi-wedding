# Univers Graphique — Babi Wedding

> *African Luxury · Modern Romance · Digital Elegance.*
> Le système de design qui porte la maquette Phase 1.

---

## 1. Concept de marque

**Babi Wedding** — *The African Wedding Ecosystem.*
Wedding Tech premium positionnée comme une **conciergerie**, pas un marketplace. Le client choisit un pack, paie un acompte, reçoit un conseiller dédié.

**Tagline principale** : *Nous ne vendons pas des prestations. Nous créons des mariages mémorables sans stress.*

**Big idea** : *Un mariage clé en main, conçu selon votre budget.*

**Trois piliers visuels** :

| Pilier | Signal visuel |
|---|---|
| **African Luxury** | Or champagne, motifs bogolan en filigrane, pagnes royaux Akan |
| **Modern Romance** | Cormorant Garamond italique, photographie cinématique portrait |
| **Digital Elegance** | Grille rigoureuse, micro-interactions douces, transitions exp.easeOut |

---

## 2. Logo & wordmark

Le logo est composé en trois temps :

1. **« Babi »** — *Cormorant Garamond italique 500*, en émeraude `#005B4F`.
   Le surnom local d'Abidjan. L'âme. Le territoire.

2. **Filet doré** séparateur — gradient `#E0C896 → #C8A66A → #9C7E45`. La signature de prestige.

3. **« WEDDING »** — *Montserrat SemiBold 14px / letter-spacing 9px*, en noir profond.
   La promesse moderne, professionnelle, internationale.

À gauche : une **étoile à 8 branches dorée** évoquant les motifs adinkra/akan, transposée en marqueur décoratif universel.

**Trois variantes** :
- `logo.svg` — version couleur (fond clair)
- `logo-light.svg` — version inversée (fond sombre/photo)
- `monogram.svg` — le « B » seul, dans un disque doré, pour favicons et avatars

**Règles d'usage** :
- Marge de sécurité = hauteur du « B »
- Taille minimale digital : 120px largeur
- Ne jamais dévier des couleurs définies
- Sur photo : toujours appliquer le voile sombre 35% pour préserver la lisibilité

---

## 3. Palette de couleurs

### Couleurs primaires (fournies par Franck)

| Nom | Hex | Rôle |
|---|---|---|
| Vert Émeraude | `#005B4F` | Primaire · confiance · CTA principal |
| Orange Safran | `#E87B24` | Accent énergique · alertes positives |
| Ivoire | `#F8F4ED` | Fond principal · papier crème |
| Or Champagne | `#C8A66A` | Prestige · accents luxe · soulignés |
| Noir Profond | `#111111` | Texte · noir luxe |

### Nuances étendues (tokens calculés)

```
--color-emerald-deep    #003F37   hover, contrastes profonds
--color-emerald-mist    #E6EEEC   fond apaisé, focus rings
--color-saffron-deep    #B85F18   hover orange
--color-saffron-soft    #FCEFE3   fond pastel
--color-ivory-warm      #F2EBDD   section alternée
--color-ivory-deep      #E8DFCC   bordures douces
--color-champagne-light #E0C896   gradient start
--color-champagne-deep  #9C7E45   accent texte sur fond clair
--color-ink-soft        #2A2A2A   sous-titres
--color-ink-muted       #6B6B6B   captions, méta
--color-ink-faint       #A6A6A6   placeholders
```

### Gradients signature

- **gold** : `linear-gradient(135deg, #E0C896 0%, #C8A66A 50%, #9C7E45 100%)`
- **emerald** : `linear-gradient(135deg, #005B4F 0%, #003F37 100%)`
- **hero-overlay** : `linear-gradient(180deg, rgba(17,17,17,.1) → .35 → .75)` pour les héros plein écran

---

## 4. Typographie

### Familles

| Famille | Usage | Poids utilisés |
|---|---|---|
| **Cormorant Garamond** (serif) | Titres éditoriaux, citations, accents émotionnels | 400, 500, 600, italique 400, italique 500 |
| **Montserrat** (sans-serif) | Corps, navigation, boutons, eyebrows | 300, 400, 500, 600, 700 |

**Importation** : Google Fonts CDN — un seul `<link>` par page.

### Échelle modulaire

Ratio **1.333** (perfect fourth), valeurs `clamp()` pour fluidité responsive.

| Token | Mobile → Desktop |
|---|---|
| `--fs-display` | 3.5rem → 7.5rem (titre hero) |
| `--fs-h1` | 3rem → 5.5rem |
| `--fs-h2` | 2.25rem → 3.75rem |
| `--fs-h3` | 1.875rem → 2.75rem |
| `--fs-h4` | 1.5rem → 2rem |
| `--fs-h5` | 1.25rem → 1.625rem |
| `--fs-h6` | 1.125rem → 1.375rem |
| `--fs-body-lg` | 1.125rem |
| `--fs-body` | 1rem |
| `--fs-body-sm` | 0.9375rem |
| `--fs-caption` | 0.8125rem |
| `--fs-overline` | 0.75rem |

### Tracking (letter-spacing)

```
--tracking-display    -0.02em   titres serif (resserre)
--tracking-tight      -0.01em
--tracking-normal     0
--tracking-wide       0.04em
--tracking-wider      0.12em    boutons
--tracking-overline   0.2em     eyebrows majuscules
```

### Hiérarchie d'usage

- **Display + italique** : punchline du hero, gros titres "manifesto"
- **H1/H2 serif droit** : titres de section
- **Eyebrow** : petit overline majuscules avant chaque titre, avec filet doré
- **Lede italique** : sous-titre éditorial en Cormorant italique
- **Body Montserrat** : tout le corps, line-height 1.7 pour la respiration

---

## 5. Espacement

Échelle **4-point grid**, exposée en tokens :

```
--space-1 = 4px      --space-7 = 48px
--space-2 = 8px      --space-8 = 64px
--space-3 = 12px     --space-9 = 96px
--space-4 = 16px     --space-10 = 128px
--space-5 = 24px     --space-11 = 160px
--space-6 = 32px
```

**Section padding** : `clamp(4rem, 10vw, 9rem)` pour respiration éditoriale.
**Gutter** : `clamp(1.25rem, 4vw, 3rem)` pour le container.

---

## 6. Rayons & ombres

### Rayons (radius)

```
--radius-xs    2px       focus rings
--radius-sm    4px       inputs
--radius-md    8px       cards moyennes
--radius-lg    16px      cards principales
--radius-xl    24px      modales
--radius-pill  999px     boutons, badges, tabs
```

### Ombres (shadows)

Quatre niveaux d'élévation + deux ombres colorées signature :

- `--shadow-sm` : élévation discrète (header scrolled)
- `--shadow-md` : cards au repos
- `--shadow-lg` : cards en hover, modales
- `--shadow-xl` : éléments en avant
- `--shadow-gold` : hover sur boutons or
- `--shadow-emerald` : hover sur boutons primaires

---

## 7. Motion

**Easings** :
- `--ease-out` = `cubic-bezier(0.16, 1, 0.3, 1)` (expo.easeOut) — *reveal scroll, entrées*
- `--ease-in-out` = `cubic-bezier(0.65, 0, 0.35, 1)` — *transitions équilibrées*
- `--ease-soft` = `cubic-bezier(0.4, 0, 0.2, 1)` — *hover micro-interactions*

**Durées** :
- `--dur-fast` = 180ms — focus, hover instantanés
- `--dur-base` = 320ms — hover cartes / boutons
- `--dur-slow` = 560ms — reveal scroll
- `--dur-cinematic` = 1200ms — hero zoom, parallaxes

**Patterns récurrents** :
- Hero : zoom subtil 1.08 → 1 sur 18s
- Cards : translateY(-6px) + shadow-lg au hover
- Boutons : translateY(-2px) au hover
- Reveal scroll : opacity 0/translateY(28px) → 1/0 (intersection observer, threshold 12%)
- Tous les motions désactivés si `prefers-reduced-motion: reduce`

---

## 8. Composants UI

### Boutons (`.btn`)

| Variante | Classe | Usage |
|---|---|---|
| Primaire | `.btn` | CTA principal émeraude (default) |
| Or | `.btn--gold` | CTA premium "réserver" / "découvrir" |
| Safran | `.btn--saffron` | Accent énergique |
| WhatsApp | `.btn--whatsapp` | Vert WhatsApp officiel `#25D366` |
| Ghost dark | `.btn--ghost` | Secondaire sur fond clair |
| Ghost light | `.btn--ghost-light` | Secondaire sur fond sombre |

Modificateurs taille : `.btn--sm`, `.btn--lg`.

Format pilule (`border-radius: 999px`), `padding: 1rem 1.75rem`, `text-transform: uppercase`, `letter-spacing: 0.12em`.

### Cartes Pack (`.pack-card`)

- Fond blanc, bordure subtile, filet doré supérieur 3px
- Hover : translateY(-6px), shadow, filet doré 5px opacité 1
- Variante `.pack-card--featured` : fond émeraude, contenu inversé, badge "Le plus choisi"
- Structure : `eyebrow` (tier) → titre → prix → liste avec puces tirets dorés → CTA

### Cartes éditoriales (`.editorial-card`)

- Media 4:5 portrait, zoom image au hover
- Body : catégorie eyebrow, titre serif, méta caption
- Lift au hover (translateY -4px)

### Inputs

- `.input` / `.textarea` / `.select` — 1px border-subtle, focus en émeraude avec ring 4px opacity 0.08
- `.choice` — radio masqué, label cliquable, état "checked" en émeraude-mist
- `.range` — slider stylisé, thumb 24px émeraude avec bordure ivoire

### Navigation

- Header sticky, 80px → 64px au scroll
- `is-light` : nav blanc sur photo
- `is-scrolled` : fond ivoire 94% + backdrop-blur 14px
- Liens : Montserrat caps + underline doré qui se déploie au hover

### Badges (`.badge`)

Variantes : `--gold`, `--emerald`, `--saffron`, `--ghost`. Format pilule, overline tracking.

### Sections layout

- `.section` : padding-block clamp(4rem, 10vw, 9rem)
- `.section--ivory` / `.section--warm` / `.section--white` / `.section--emerald` / `.section--ink`
- `.container` : max-width 1320px
- `.container-text` : max-width 720px pour lecture éditoriale
- `.grid`, `.grid-2`, `.grid-3`, `.grid-4` avec `auto-fit minmax(min(100%, X), 1fr)`

---

## 9. Iconographie

**Style** : trait fin **1.6px**, viewBox 24×24, coins légèrement arrondis (`stroke-linecap: round` quand applicable), couleur héritée du contexte (`currentColor`).

Icônes principales utilisées dans la maquette : horloge, profil, email, panier, photo, étoile, flèche, lieu, chat WhatsApp.

Tout est en SVG inline pour la couleur dynamique et le contrôle exact.

---

## 10. Photographie & motifs

### Direction artistique photo

- **Cadrage** : portrait 4:5 privilégié, paysage 16:10 pour les bannières
- **Sujets** : couples ivoiriens, scènes de dot, détails de pagnes, décoration florale, photo de mariée africaine élégante
- **Traitement** : palette désaturée légèrement chaude, blacks profonds, *highlights* champagne
- **Compositions** : règle des tiers, surtout pas de centré-symétrique commercial

### Cadre signature (`.frame`)

Toute photo est encadrée par un trait intérieur ivoire opacity 40% à 12px du bord, créant l'effet "passe-partout" éditorial.

### Motif Bogolan (`pattern-bogolan.svg`)

SVG répétable, losanges + étoiles inspirés des tissus bogolan/kente, en or champagne à opacité 0.18 sur fond émeraude. Utilisé en filigrane dans les `.cta-banner` et `.pack-detail-hero`.

### Divider floral (`divider-leaf.svg`)

Petit séparateur or champagne pour les sections éditoriales (page Conciergerie).

---

## 11. Patterns d'images placeholder

Utilisés via **Unsplash CDN** dans la maquette (à remplacer par les vraies photos en prod) :

```
https://images.unsplash.com/photo-XXXX?w=900&auto=format&fit=crop&q=80
```

Mots-clés source : *african wedding*, *african bride*, *wedding decoration*, *african couple ceremony*, *wedding rings*, *bridal portrait*.

En production, remplacer par une banque de photos propre — idéalement shooting éditorial Babi Wedding.

---

## 12. Architecture du système

```
assets/
├── css/
│   ├── tokens.css        ← TOUS les design tokens (couleurs, fs, space, motion)
│   ├── base.css          ← Reset + typographie + layout primitifs
│   ├── components.css    ← Bibliothèque de composants
│   └── site.css          ← Styles spécifiques pages
├── js/
│   ├── site.js           ← Header sticky, scroll reveal, nav mobile
│   ├── quiz.js           ← State machine 5 étapes
│   └── simulator.js      ← Calcul budget en direct
└── img/
    ├── logo.svg
    ├── logo-light.svg
    ├── monogram.svg
    ├── pattern-bogolan.svg
    └── divider-leaf.svg
```

**Une seule source de vérité** : `tokens.css`. Modifier une variable, tout le système se met à jour.

---

## 13. Six principes non-négociables

1. **Aérée, jamais vide** — L'espace blanc est un luxe. Chaque section respire, chaque titre a la place de résonner.
2. **Italique pour l'émotion** — Le serif italique souligne les moments forts. Parcimonie obligatoire.
3. **L'or pour le prestige** — Le champagne est un accent, pas un fond. Filets, soulignés, gradients fins — jamais des aplats lourds.
4. **Photographie cinématique** — Portrait 4:5 privilégié, grain doux, palette désaturée. Les couples au cœur.
5. **Africain, jamais folklorique** — Les motifs bogolan, les pagnes Akan, la richesse traditionnelle — toujours filtrés par une grille moderne, jamais en surdose.
6. **Digital, jamais froid** — Toute interaction respire la chaleur. WhatsApp accessible partout, langage doux, micro-attentions.

---

## 14. Slogans réutilisables

- *Le mariage de vos rêves commence ici.* (hero principal)
- *Toute l'excellence du mariage africain sur une seule plateforme.* (intro écosystème)
- *Vivez votre amour, nous orchestrons le reste.* (CTA bannière)
- *L'art d'organiser des mariages inoubliables.* (eyebrow signature)
- *Un mariage clé en main, conçu selon votre budget.* (manifesto)
- *Nous ne vendons pas des prestations. Nous créons des mariages mémorables sans stress.* (promesse fondatrice)

---

*Babi Wedding · The African Wedding Ecosystem · Phase 1 Design System v1.0*
