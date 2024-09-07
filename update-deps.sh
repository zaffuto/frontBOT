#!/bin/bash

# Nombre de la rama de actualización
BRANCH_NAME="update-dependencies-$(date +%Y-%m-%d)"

# Crea una nueva rama de actualización
echo "Creating new branch: $BRANCH_NAME"
git checkout -b "$BRANCH_NAME"

# Actualiza dependencias menores (sin breaking changes)
echo "Updating minor and patch dependencies..."
npm update

# Lista de dependencias principales que requieren atención individual
DEPENDENCIES=(
  "next@latest"
  "react@latest"
  "react-dom@latest"
  "eslint@latest"
)

# Actualiza cada dependencia importante de forma individual
for DEP in "${DEPENDENCIES[@]}"; do
  echo "Updating $DEP..."
  npm install "$DEP"
  
  # Corre tus tests después de actualizar cada dependencia
  echo "Running tests..."
  npm run test

  # Verifica si los tests pasaron exitosamente
  if [ $? -ne 0 ]; then
    echo "Tests failed after updating $DEP. Please review the issues."
    exit 1
  fi
done

# Ejecuta `npm audit fix` para solucionar vulnerabilidades menores
echo "Running npm audit fix..."
npm audit fix

# Haz un commit con los cambios
git add package.json package-lock.json
git commit -m "Updated dependencies to latest versions"

# Push de la nueva rama
echo "Pushing branch $BRANCH_NAME to remote..."
git push origin "$BRANCH_NAME"

echo "Dependencies updated and committed successfully!"
