class Entity {
  
}

class System {

}

export default class EntityManager {
  systems: Array<System>;

  constructor(...systems: Array<System>) {
    this.systems = systems;
  }
}