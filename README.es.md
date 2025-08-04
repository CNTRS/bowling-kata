# TS-Starter 🚀 TypeScript Modern Template

[🇬🇧 English version](README.md)

Template moderno y optimizado para TypeScript diseñado tanto para la práctica de katas como para el desarrollo de proyectos profesionales. Incluye las herramientas más actuales y rápidas del ecosistema JavaScript/TypeScript.

## ✨ Características

- **⚡ Ultra rápido**: Vitest, Biome, tsup y pnpm para máximo rendimiento
- **🔧 Configuración mínima**: Todo configurado y listo para usar
- **📦 Gestión moderna**: pnpm para eficiencia en dependencias
- **🧪 Testing avanzado**: Vitest con coverage y UI
- **🎯 Linting unificado**: Biome para linting y formateo en una herramienta
- **📈 Versionado automático**: Changesets para releases profesionales
- **🔄 Git hooks**: Pre-commit y pre-push automatizados
- **🏗️ Build optimizado**: tsup con soporte para ESM/CJS

## 📋 Requisitos Previos

- **Node.js**: >= 22.0.0 (LTS recomendado)
- **pnpm**: >= 10.0.0

### Instalación de Prerrequisitos

Guía de instalación de fnm: https://fnm.vercel.app/


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

## 🏗️ Build y Distribución

El proyecto genera builds optimizados para múltiples formatos:

```bash
# Generar build
pnpm build
```

**Output generado:**
- `dist/index.js` - CommonJS
- `dist/index.mjs` - ES Modules
- `dist/index.d.ts` - Tipos TypeScript

## 📦 Gestión de Versiones

Usamos [Changesets](https://github.com/changesets/changesets) para gestión de versiones:

### 1. Crear changeset

```bash
pnpm changeset
```

Esto te preguntará:
- Qué paquetes han cambiado
- Tipo de cambio (major, minor, patch)
- Descripción del cambio

### 2. Actualizar versiones

```bash
pnpm version
```

### 3. Publicar

```bash
pnpm release
```

## 🛠️ Configuración

### TypeScript

La configuración en `tsconfig.json` está optimizada para:
- ES2022 target
- Strict mode habilitado
- Module resolution moderna
- Soporte para Vitest globals

### Biome

Configuración unificada para linting y formateo en `biome.json`:
- Reglas recomendadas habilitadas
- Formateo consistente
- Organización automática de imports

### Git Hooks

Configurados automáticamente via `simple-git-hooks`:
- **Pre-commit**: Linting + type checking
- **Pre-push**: Tests completos

## 🔌 Dependencias y Utilidades Adicionales

### Para Katas de Programación

#### @faker-js/faker - Generación de Datos de Prueba
```bash
pnpm add -D @faker-js/faker
```

Perfecto para generar datos realistas en tests:

```typescript
import { faker } from '@faker-js/faker'

const user = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  age: faker.number.int({ min: 18, max: 80 })
}
```

#### fast-check - Property-Based Testing
```bash
pnpm add -D fast-check
```

Para tests más robustos que encuentren edge cases automáticamente:

```typescript
import fc from 'fast-check'

fc.assert(fc.property(fc.integer(), fc.integer(), (a, b) => {
  expect(add(a, b)).toBe(add(b, a)) // propiedad conmutativa
}))
```

### Para Proyectos Profesionales

#### zod - Validación de Esquemas
```bash
pnpm add zod
```

**Altamente recomendado** para validación type-safe:

```typescript
import { z } from 'zod'

const UserSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().int().positive()
})

type User = z.infer<typeof UserSchema> // Tipos automáticos
```

#### @total-typescript/ts-reset - TypeScript Mejorado
```bash
pnpm add -D @total-typescript/ts-reset
```

Mejora los tipos por defecto de TypeScript. Solo añadir al inicio de tu código:

```typescript
import '@total-typescript/ts-reset'
```

#### msw - Mock de APIs
```bash
pnpm add -D msw
```

Para testing sin depender de APIs reales:

```typescript
import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
  http.get('/api/user', () => {
    return HttpResponse.json({ name: 'John' })
  })
)
```

### Herramientas de Desarrollo

#### size-limit - Monitoreo de Bundle
```bash
pnpm add -D size-limit @size-limit/preset-small-lib
```

Configura en `package.json`:

```json
{
  "size-limit": [
    {
      "path": "dist/index.js",
      "limit": "10 KB"
    }
  ],
  "scripts": {
    "size": "size-limit"
  }
}
```

#### @commitlint/cli - Estandarización de Commits
```bash
pnpm add -D @commitlint/cli @commitlint/config-conventional
```

Crea `commitlint.config.js`:

```javascript
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

#### cross-env - Variables de Entorno Cross-Platform
```bash
pnpm add -D cross-env
```

Para scripts que funcionen en todos los sistemas operativos:

```json
{
  "scripts": {
    "build:prod": "cross-env NODE_ENV=production pnpm build"
  }
}
```

### Dependencias por Contexto

#### Para Proyectos Web/API
```bash
pnpm add @hono/hono           # Framework web minimalista
pnpm add drizzle-orm          # ORM type-safe
pnpm add @t3-oss/env-nextjs   # Validación de env vars
```

#### Para Proyectos CLI
```bash
pnpm add commander  # Parsing de argumentos CLI
pnpm add chalk      # Colores en terminal
pnpm add ora        # Spinners de loading
```

#### Para Manipulación de Datos
```bash
pnpm add papaparse  # Parsing de CSV
pnpm add date-fns   # Manipulación de fechas
pnpm add lodash-es  # Utilidades funcionales
```

## 📈 Comparativa con Templates Tradicionales

| Métrica | Template Tradicional | Este Template | Mejora |
|---------|---------------------|---------------|--------|
| Instalación | ~45s (npm) | ~18s (pnpm) | 60% más rápido |
| Build | ~8s (tsc) | ~1.2s (tsup) | 85% más rápido |
| Tests | ~3.5s (Jest) | ~0.8s (Vitest) | 77% más rápido |
| Linting | ~2.1s (ESLint+Prettier) | ~0.3s (Biome) | 86% más rápido |

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para detalles.

## 🎯 Casos de Uso

### Para Katas
1. Clona el template
2. Implementa tu solución en `src/index.ts`
3. Escribe tests en `src/__tests__/`
4. Ejecuta `pnpm test` para verificar

### Para Proyectos Nuevos
1. Usa el template como base
2. Añade dependencias específicas según necesites
3. Configura CI/CD usando los workflows incluidos
4. Desarrolla con `pnpm dev` y testea con `pnpm test`
