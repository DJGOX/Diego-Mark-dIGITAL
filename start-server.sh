#!/bin/bash

echo "🛑 Deteniendo procesos en puertos 3000 y 3001..."
lsof -ti:3000 | xargs kill -9 2>/dev/null
lsof -ti:3001 | xargs kill -9 2>/dev/null
sleep 2

echo "🧹 Limpiando caché de Next.js..."
rm -rf .next
rm -rf node_modules/.cache

echo "📦 Verificando dependencias..."
if [ ! -d "node_modules" ]; then
    echo "Instalando dependencias..."
    npm install
fi

echo "🚀 Iniciando servidor de desarrollo..."
echo ""
echo "═══════════════════════════════════════"
echo "  Servidor corriendo en:"
echo "  http://localhost:3000"
echo "═══════════════════════════════════════"
echo ""

npm run dev
