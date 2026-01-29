#!/bin/bash

# Script para iniciar el servidor de desarrollo
# Uso: ./start-dev.sh o bash start-dev.sh

echo "🚀 Iniciando servidor de desarrollo..."
echo ""

# Verificar si el puerto 3000 está en uso
if lsof -Pi :3000 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  El puerto 3000 está en uso. Intentando liberarlo..."
    lsof -ti:3000 | xargs kill -9 2>/dev/null
    sleep 2
fi

# Iniciar el servidor
npm run dev
