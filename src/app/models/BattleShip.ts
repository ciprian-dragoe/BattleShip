import { HullState } from '../interfaces/HullState';
import { HullIntegrity } from '../interfaces/HullIntegrity';
import { Ship } from './Ship';

export class BattleShip extends Ship {
  constructor() {
    super(5);
    this.shipIntegrity = this.buildHullStructure();
    this.shipDesign = this.buildShipDesignOnMap();
  }

  private buildShipDesignOnMap() {
    return [{y: 0, x: 0}, {y: 0, x: 1}, {y: 0, x: 2}, {y: 1, x: 3}, {y: 1, x: 4}];
  }

  private buildHullStructure(): HullIntegrity[] {
    const defaultHullIntegrity: HullIntegrity = { healthValue: 1, hullState: HullState.Intact, Location: {x: 0, y: 0}};
    return [
      defaultHullIntegrity,
      defaultHullIntegrity,
      defaultHullIntegrity,
      defaultHullIntegrity,
      defaultHullIntegrity
    ];
  }
}
