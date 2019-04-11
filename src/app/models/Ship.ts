import { CellStatus } from '../interfaces/CellStatus';
import { HullIntegrity } from '../interfaces/HullIntegrity';
import { HullStructure } from '../interfaces/HullStructure';
import { MapCell } from '../interfaces/MapCell';

export abstract class Ship {
  remainingHealth: number;
  protected hullStructure: HullStructure[];

  protected constructor(startingHealth: number) {
    this.remainingHealth = startingHealth;
  }

  private static IsHit(hull: HullStructure, location: MapCell) {
    return hull.Location.x === location.x &&
      hull.Location.y === location.y &&
      hull.hullIntegrity === HullIntegrity.Intact;
  }

  getAttackedResponse(location: MapCell): CellStatus {
    let result: CellStatus = CellStatus.Missed;

    for (const hull of this.hullStructure) {
      if (!Ship.IsHit(hull, location)) {
        return;
      }

      hull.hullIntegrity = HullIntegrity.Destroyed;
      result = CellStatus.Hit;
      this.remainingHealth -= hull.healthValue;
      break;
    }

    return result;
  }
}
