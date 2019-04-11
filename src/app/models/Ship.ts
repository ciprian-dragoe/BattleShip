import { CellStatus } from '../interfaces/CellStatus';
import { HullState } from '../interfaces/HullState';
import { HullIntegrity } from '../interfaces/HullIntegrity';
import { MapCell } from '../interfaces/MapCell';

export abstract class Ship {
  remainingHealth: number;
  shipIntegrity: HullIntegrity[];
  shipDesign: MapCell[];

  protected constructor(startingHealth: number) {
    this.remainingHealth = startingHealth;
  }

  private static IsHit(hull: HullIntegrity, location: MapCell) {
    return hull.mapLocation.x === location.x &&
      hull.mapLocation.y === location.y &&
      hull.hullState === HullState.Intact;
  }

  getAttackedResponse(location: MapCell): CellStatus {
    let result: CellStatus = CellStatus.Missed;

    for (const hull of this.shipIntegrity) {
      if (!Ship.IsHit(hull, location)) {
        return;
      }

      hull.hullState = HullState.Destroyed;
      result = CellStatus.Hit;
      this.remainingHealth -= hull.healthValue;
      break;
    }

    return result;
  }

  updateLocation(coordinates: MapCell[]) {
    for (let i = 0; i < this.shipIntegrity.length; i++) {
      this.shipIntegrity[i].mapLocation = coordinates[i];
    }
  }
}
