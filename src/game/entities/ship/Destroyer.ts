import { HullState } from '../interfaces/HullState';
import { HullIntegrity } from '../interfaces/HullIntegrity';
import { Ship } from './Ship';

export class Destroyer extends Ship
{
  constructor() {
    super(4);
    this.integrity = this.buildHullStructure();
    this.design = this.buildShipDesignOnMap();
  }

  private buildShipDesignOnMap() {
    return [{y: 0, x: 0}, {y: 0, x: 1}, {y: 0, x: 2}, {y: 1, x: 3}, {y: 1, x: 4}];
  }

  private buildHullStructure(): HullIntegrity[] {
    const defaultHullIntegrity: HullIntegrity = { healthValue: 1, hullState: HullState.Intact, mapLocation: {x: 0, y: 0}};
    return [
      defaultHullIntegrity,
      defaultHullIntegrity,
      defaultHullIntegrity,
      defaultHullIntegrity,
    ];
  }
}
