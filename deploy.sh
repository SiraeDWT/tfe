#!/usr/bin/env bash

set -e

echo "🚀 Déploiement Flask + Vite avec Gunicorn"

# 1. Ajout de Python au PATH (utile sur Render ou autres environnements)
export PATH=$PATH:/usr/local/python3/bin

# 2. Installation des dépendances Python
echo "📦 Installation des dépendances Python"
cd backend
pip install -r requirements.txt

# 3. Lancement de l'app avec Gunicorn
echo "🚦 Démarrage de Gunicorn..."
exec gunicorn app:app
