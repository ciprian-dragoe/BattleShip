import { HullState } from '../interfaces/HullState';
import { HullIntegrity } from '../interfaces/HullIntegrity';
import { Ship } from './Ship';

export class BattleShip extends Ship {
  constructor() {
    super(5);
    this.shipIntegrity = this.buildHullStructure();
  }

  private buildHullStructure(): HullIntegrity[] {
    const defaultHullStructure = {healthValue: 1, hullIntegrity: HullState.Intact, Location: {y: 0, x: 0}};

    return [
      defaultHullStructure,
      defaultHullStructure,
      defaultHullStructure,
      defaultHullStructure,
      defaultHullStructure
    ];
  }
}
