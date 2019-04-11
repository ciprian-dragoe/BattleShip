import { HullIntegrity } from '../interfaces/HullIntegrity';
import { HullStructure } from '../interfaces/HullStructure';
import { Ship } from './Ship';

export class Destroyer extends Ship
{
  constructor() {
    super(4);
    this.hullStructure = this.buildHullStructure();
  }

  private buildHullStructure(): HullStructure[] {
    const defaultHullStructure = {healthValue: 1, hullIntegrity: HullIntegrity.Intact, Location: {y: 0, x: 0}};

    return [
      defaultHullStructure,
      defaultHullStructure,
      defaultHullStructure,
      defaultHullStructure
    ];
  }
}
