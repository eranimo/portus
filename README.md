# Portus
An entity-component system built in TypeScript inspired by [makr](https://github.com/makrjs).

## Features
- object pooling of both entities and components
- observer pattern to notify systems of new components

## Design
- Components are classes that do one thing
- Entities are containers of component instances
- Systems are functions that query for relevant component types


# Example

```typescript
import { EntityManager } from 'portus';

const manager = EntityManager();

class Position {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// register components
manager.register(
  Position,
)

manager.run(Motion, )

```