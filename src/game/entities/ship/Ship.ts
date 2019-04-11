import { HullState } from '../interfaces/HullState';
import { HullIntegrity } from '../interfaces/HullIntegrity';
import { MapCell } from '../interfaces/MapCell';
import { MapLegend } from '../interfaces/MapLegend';

export abstract class Ship {
  remainingHealth: number;
  integrity: HullIntegrity[];
  design: MapCell[];

  protected constructor(startingHealth: number) {
    this.remainingHealth = startingHealth;
  }

  private static IsHit(hull: HullIntegrity, location: MapCell) {
    return hull.mapLocation.x === location.x &&
      hull.mapLocation.y === location.y &&
      hull.hullState === HullState.Intact;
  }

  getAttackedResponse(location: MapCell): MapLegend {
    let result = MapLegend.DamagedEmpty;

    for (const hull of this.integrity) {
      if (!Ship.IsHit(hull, location)) {
        return;
      }

      hull.hullState = HullState.Destroyed;
      result = MapLegend.Player1ShipHit;
      this.remainingHealth -= hull.healthValue;
      break;
    }

    return result;
  }

  updateLocation(coordinates: MapCell[]) {
    for (let i = 0; i < this.integrity.length; i++) {
      this.integrity[i].mapLocation = coordinates[i];
    }
  }
}
