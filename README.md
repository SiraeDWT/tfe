# 🚀 Vite + Flask – Fullstack Workflow

Ce projet combine un **frontend moderne** avec Vite (JS + SCSS) et un **backend léger** avec Flask (Python).

---

## 🧰 Prérequis

- Node.js (v18+ recommandé)
- Python 3.10+
- pip (installé avec Python)
- Git (optionnel mais recommandé)

---

## 📦 Installation

### 1. Cloner le projet
```bash
~ git clone https://github.com/user/project.git
~ cd project
```

### 2. Créer l'environnement virtuel et l'activer
```bash
cd backend
project/backend ~ python3 -m venv venv
project/backend ~ source ./venv/bin/activate  # Mac/Linux
project/backend ~ .\venv\Scripts\Activate.ps1 # Windows
```

### 3. Installer les dépendances Python
```bash
(venv) project/backend ~ pip install -r requirements.txt
```

### 3-1. Ajouter des dépendances à la liste
```bash
(venv) project/backend ~ pip freeze > requirements.txt
```

### 4. Installer les dépendances frontend à la racine du projet
```bash
project/ ~ npm install
```

---

### 4. Mode Développement

#### 1. Compiler les fichiers en mode dev
```bash
project/ ~ npm run dev
```

#### 2. Lancer le serveur Flask local
```bash
cd backend
(venv) project/backend ~ python app.py  # http://localhost:5000 / http://127.0.0.1:5000
```

---

### 5. Mode Production

#### 1. Compiler les fichiers et build le projet
```bash
project/ ~ npm run build
```

#### 2. Lancer Flask pour tester la version production
```bash
cd backend
(venv) project/backend ~ python app.py  # http://localhost:5000 / http://127.0.0.1:5000
```

---

## Utilisation du workflow

### 🧩 Template HTML : `/backend/templates/**/*.html`
C’est ici qu'on développe la structure HTML du projet avec le moteur de templates Jinja2 de Flask.  

- `layout.html` : structure de base utilisée par toutes les pages

- `index.html` : page d’accueil principale du projet, qui hérite de layout.html

- `components/` : contient les composants réutilisables comme `header.html`, `footer.html`, etc.

- `pages/` : regroupe les autres pages du site (ex. `about.html`, `contact.html`), si le projet en contient plusieurs  

> Chaque fichier peut étendre layout.html grâce à la syntaxe {% extends "layout.html" %} pour garder une structure cohérente.  


### 🎨 SCSS & JS : `/src/**/*.{scss,js}`
Le dossier src/ contient tout le code frontend dynamique du projet :

- `src/js/` : fichiers JavaScript, utilisés pour ajouter de l'interactivité au site. Le point d’entrée principal est `app.js`

- `src/scss/` : fichiers SCSS modulaires pour organiser les styles. Le fichier principal est `app.scss`, dans lequel on peut importer les utilitaires et composants (`_variables.scss`, `_buttons.scss`, etc.)

- `src/css/` : fichier qui charge Tailwind dans `app.css`

> Ces fichiers sont compilés avec Vite et exportés dans `backend/static/assets` lors du npm run build.


### 🗂️ Assets : `/public/**/*.{woff2,svg,webp}`
Le dossier `public/` contient les fichiers statiques bruts à copier tels quels dans le dossier final `backend/static/` lors du build :

- `fonts/` : pour tous les fichiers typographiques (.woff2, etc.)

- `images/` : pour les visuels (.jpg, .png, .webp, etc.)

- `icons/` : pour les fichiers SVG utilisés dans le sprite (`sprite.svg` est généré à partir de ces fichiers)  

> Ce dossier est recopié tel quel grâce à Vite et sert de base pour les ressources statiques de ton site.

---

## ℹ️ À savoir
Le workflow embarque par défaut :

- **GSAP** (GreenSock Animation Platform), pour gérer les animations fluides et performantes

- **TailwindCSS**, pour construire l’interface avec des classes modernes

> Ces deux bibliothèques sont chargées dans le fichier src/js/app.js et sont prêtes à l'emploi dès le démarrage du projet.

---

## Déploiement du projet

### ⚠️ Impérativement build le projet avant le déploiement
```
project/ ~ npm run build
```

### 🧳 À conserver et déployer :
```
project/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── static/              # contient les fichiers générés (assets, sprite, images, etc.)
│   └── templates/           # HTML avec Jinja
├── package.json             # (facultatif, seulement si le serveur build le frontend)
├── README.md                # toujours bon à avoir

```

### 🧹 À exclure du push / prod :
```
node_modules/              # sera régénéré par npm install
src/                       # sources non nécessaires une fois buildé
public/                    # contenu déjà copié dans static/ après build
venv/                      # ton env local, à recréer sur le serveur
generate-sprite*.js        # outils de dev uniquement
postcss.config.cjs         # config du builder
tailwind.config.js         # config du builder
vite.config.js             # config du builder
```

### 🚀 Et côté serveur :
```bash
cd backend
project/backend ~ python3 -m venv venv
project/backend ~ source venv/bin/activate
project/backend ~ pip install -r backend/requirements.txt
project/backend ~ python app.py
```

---

## 🔗 Liens utiles

- 📁 [Repository GitHub](https://github.com/SiraeDWT/vite-flask-workflow)  

- 👨‍💻 Réalisé par [Dylan Vercalsteren](https://dylan-vercalsteren.be/)  
 
**Dylan Vercalsteren &copy; 2025**  