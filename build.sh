#!/usr/bin/env bash

set -e

echo "📦 Installation des dépendances frontend"
npm install
npm run build

# echo "🧹 Nettoyage des anciens assets"
# rm -rf backend/static/assets/*
# rm -rf backend/static/svg/sprite.svg

# echo "📂 Copie des nouveaux fichiers générés"
# cp public/svg/sprite.svg backend/static/svg/

if [[ "$RENDER" != "true" ]]; then
  echo "🐍 Création de l'environnement virtuel Python (local)"
  cd backend
  python -m venv venv
  source venv/bin/activate
  pip install -r requirements.txt
  cd ..
else
  echo "🐍 Dépendances Python gérées automatiquement par Render"
fi

echo "✅ Build terminé avec succès"
