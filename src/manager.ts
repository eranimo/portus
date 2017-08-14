import Entity from './entity';

type System = (...components: Function[]) => void;

export default class EntityManager {
  private _componentsMap: { [name: string]: Function };

  // all entities in the manager
  private _entities: {
    [id: number]: Entity
  };

  // entity graveyard
  private _entityPool: Array<number>;

  // mapping of entities to components
  private _entityMap: {
    [id: number]: {
      [name: string]: Function
    }
  };

  // whether an entity is alive or dead
  // true = alive; false = dead
  private _entityFlags: {
    [id: number]: boolean
  };

  private _entityCount: number;

  constructor() {
    this._componentsMap = {};
    this._entityPool = []; // TODO: use typed array
    this._entities = {}; // TODO: use typed array
    this._entityFlags = {};
    this._entityMap = {};
    this._entityCount = 0;
  }
  
  // register components with the entity manager
  register(...components: Function[]) {
    for (const c of components) {
      this._componentsMap[c.name] = c;
    }
  }

  // allocate an ID, either reclaim a deleted ID
  // or create a new one
  create() {
    let id;
    if (this._entityPool.length > 0) {
      // we have available preallocated entities
      id = this._entityPool.pop();
    } else {
      // we need to create a new one
      this._entityCount++;
      this._entities[id] = new Entity(this, id);
    }
    const entity = this._entities[id];
    this._entityFlags[id] = true;

    return entity;
  }

  get(id: number) {
    return this._entities[id];
  }

  // increase the pool to a certain amount
  preallocate() {

  }

  // return entities that have the given components
  query(...components: Function[]) {
    
  }

  _entityHasComponent(id: number, component: Function) {
    
  }

  _addComponentToEntity(id: number, component: Function) {
    
  }

  _removeComponentFromEntity(id: number, component: Function) {
    
  }

  _getComponentInEntity(id: number, component: Function) {
    
  }

  _isEntityValid(entity: Entity): boolean {
    return true;
  }

  // removed entities will be added back into the pool
  _destroyEntity(id: number) {
    if (this._entityFlags[id] === true) {
      this._entityFlags[id] = false;
      this._entityMap[id] = {};
      this._entityPool.push(id);
      delete this._entities[id];
    }
  }

  // run the arguments as systems over the current entities
  run(...systems: System[]) {
    for (const system: System in systems) {
      system()
    }
  }
}