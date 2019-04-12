import { Location } from '../map/map';

export abstract class Ship {
  private schematic: Location[];

  protected constructor(private id, private health: number) {
  }

  takeHit() {
    this.health--;
  }

  protected setSchematic(designOnMap: Location[]) {
    this.schematic = designOnMap;
  }

  getId(): number {
    return this.id;
  }

  getSchematic(): Location[] {
    return this.schematic;
  }

  getCurrentHealth(): number {
    return this.health;
  }
}
