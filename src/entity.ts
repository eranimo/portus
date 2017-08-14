import EntityManager from './manager';


export default class Entity {
  _manager: EntityManager;
  _id: number;

  constructor(manager: EntityManager, id: number) {
    this._manager = manager;
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  // does this entity have component?
  has(component: Function) {
    return this._manager._entityHasComponent(this._id, component);
  }

  // add a component
  add(component: Function) {
    return this._manager._addComponentToEntity(this._id, component);
  }

  // remove a component
  remove(component: Function) {
    return this._manager._removeComponentFromEntity(this._id, component);
  }

  // get a component instance
  get(component: Function) {
    return this._manager._getComponentInEntity(this._id, component);
  }

  // removes the entity and frees up memory
  destroy() {
    return this._manager._destroyEntity(this.id);
  }
}