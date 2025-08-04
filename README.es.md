# Kata Bowling 🚀

[🇬🇧 English version](README.md)

## Enunciado

Crea un programa que calcule la puntuación de una partida de bolos.

### Reglas

1. El juego consta de 10 tiradas (frames).
2. En cada tirada, el jugador tiene dos oportunidades para derribar 10 bolos.
3. Si el jugador derriba los 10 bolos en el primer intento (strike), la tirada termina y los dos siguientes lanzamientos se suman como bonus.
4. Si el jugador derriba los 10 bolos en dos intentos (spare), el siguiente lanzamiento se suma como bonus.
5. Si no se consigue ni strike ni spare, la puntuación de la tirada es la suma de los bolos derribados en esa tirada.
6. En la décima tirada, si el jugador consigue strike o spare, obtiene lanzamientos extra para completar el bonus.
7. La puntuación final es la suma de todas las tiradas, incluyendo los bonus.

### Ejemplo

| Tirada | Lanzamientos | Puntuación |
|--------|--------------|------------|
| 1      | X            | 10 + dos siguientes lanzamientos |
| 2      | 7 /          | 10 + siguiente lanzamiento       |
| 3      | 9 0          | 9                                 |
| ...    | ...          | ...                               |

Implementa la lógica de puntuación y proporciona tests para verificar la solución.

---

## Desarrollo

Implementa tu solución en `src/bowlingGame.ts` y los tests en `src/__tests__/bowlingGame.test.ts`.

---

## 🔧 Scripts

### Desarrollo

```bash
# Desarrollo con recarga automática
pnpm dev

# Tests en modo watch
pnpm test

# Tests con interfaz web
pnpm test:ui

# Tests con cobertura
pnpm test:coverage
```

### Calidad de Código

```bash
# Revisar código (linting + formateo)
pnpm lint

# Revisar y corregir código automáticamente
pnpm lint:fix

# Solo formatear
pnpm format

# Verificar tipos TypeScript
pnpm type-check
```

### Build y Release

```bash
# Build para producción
pnpm build

# Build en modo watch
pnpm build:watch

# Limpiar archivos generados
pnpm clean

# Crear changeset para release
pnpm changeset

# Actualizar versiones
pnpm version

# Publicar release
pnpm release
```

## 🧪 Testing

### Ejecutar Tests

```bash
# Tests en modo watch (desarrollo)
pnpm test

# Ejecutar una vez y salir
pnpm test:run

# Tests con coverage
pnpm test:coverage

# Interfaz web para tests
pnpm test:ui
```

### Escribir Tests

Los tests se ubican en `src/__tests__/` y siguen la convención de Vitest. Si estás familiarizado con Jest, verás que es muy similar:

```typescript
import { describe, it, expect } from 'vitest'
import { myFunction } from '../index'

describe('myFunction', () => {
  it('should work correctly', () => {
    expect(myFunction('input')).toBe('expected')
  })
})
```
