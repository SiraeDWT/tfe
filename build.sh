#!/usr/bin/env bash

set -e

echo "📦 Installation des dépendances frontend"
npm install
npm run build

echo "📂 Copie du build dans le backend"
rm -rf ./backend/static/*
rm -rf ./backend/templates/*
mkdir -p ./backend/static
mkdir -p ./backend/templates
cp -r dist/assets ./backend/static/
cp dist/index.html ./backend/templates/

echo "✅ Build terminé"
