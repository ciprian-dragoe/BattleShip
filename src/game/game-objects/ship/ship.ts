import { Location } from '../map/map';

export abstract class Ship {
  designOnMap: Location[];

  protected constructor(private id, private health: number) {
  }

  takeHit() {
    this.health--;
  }

  protected setDesignOnMap(designOnMap: Location[]) {
    this.designOnMap = designOnMap;
  }

  getId(): number {
    return this.id;
  }

  getDesignOnMap(): Location[] {
    return this.designOnMap;
  }

  getCurrentHealth(): number {
    return this.health;
  }
}
