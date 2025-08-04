# Bowling Kata 🚀

[🇪🇸 Versión en Español](README.es.md)

## Statement

Create a program that calculates the score for a game of bowling.

### Rules

1. The game consists of 10 frames.
2. In each frame, the player has two opportunities to knock down 10 pins.
3. If the player knocks down all 10 pins on the first try (a strike), the frame ends and the next two rolls are added as bonus.
4. If the player knocks down all 10 pins in two tries (a spare), the next roll is added as bonus.
5. If neither a strike nor a spare is scored, the frame score is the total pins knocked down in that frame.
6. In the tenth frame, if the player scores a strike or spare, they get extra rolls to complete the bonus.
7. The final score is the sum of all frames, including bonuses.

### Example

| Frame | Rolls      | Score |
|-------|------------|-------|
| 1     | X          | 10 + next two rolls |
| 2     | 7 /        | 10 + next roll      |
| 3     | 9 0        | 9                  |
| ...   | ...        | ...                |

Implement the scoring logic and provide tests to verify the solution.

---

## Development

Implement your solution in `src/bowlingGame.ts` and write tests in `src/__tests__/bowlingGame.test.ts`.

---

## 🔧 Main Scripts

### Development

```bash
# Development with hot reload
pnpm dev

# Tests in watch mode
pnpm test

# Tests with web UI
pnpm test:ui

# Tests with coverage
pnpm test:coverage
```

### Code Quality

```bash
# Check code (linting + formatting)
pnpm lint

# Auto-fix issues
pnpm lint:fix

# Format only
pnpm format

# Check TypeScript types
pnpm type-check
```

### Build and Release

```bash
# Production build
pnpm build

# Build in watch mode
pnpm build:watch

# Clean generated files
pnpm clean

# Create changeset for release
pnpm changeset

# Update versions
pnpm version

# Publish release
pnpm release
```

## 🧪 Testing

### Running Tests

```bash
# Tests in watch mode (development)
pnpm test

# Run once and exit
pnpm test:run

# Tests with coverage
pnpm test:coverage

# Web UI for tests
pnpm test:ui
```

### Writing Tests

Tests are located in `src/__tests__/` and follow Vitest conventions. If you are familiar with Jest, you will find it very similar:

```typescript
import { describe, it, expect } from 'vitest'
import { myFunction } from '../index'

describe('myFunction', () => {
  it('should work correctly', () => {
    expect(myFunction('input')).toBe('expected')
  })
})
```
