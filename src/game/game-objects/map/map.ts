import { MapLegend } from './map-legend';

export interface MapSize {
  x: number;
  y: number;
}

export interface Location {
  xAxis: number;
  yAxis: number;
}

export class Map {
  constructor(private worldRepresentation: number[][],
              private shipIdsOnMap: number[]) {
  }

  attackLocation(location: Location): number {
    const hitTarget = this.worldRepresentation[location.xAxis][location.yAxis];
    this.updateMap(hitTarget, location);
    return hitTarget;
  }

  private updateMap(hitTarget, location: Location) {
    if (this.shipIdsOnMap.find(id => id === hitTarget)) {
      this.worldRepresentation[location.xAxis][location.yAxis] = MapLegend.Player1ShipHit;
    } else {
      this.worldRepresentation[location.xAxis][location.yAxis] = MapLegend.DamagedEmpty;
    }
  }

  getWorldState(): number[][] {
    const result = [];
    for (let i = 0; i < this.worldRepresentation.length; i++) {
      result[i] = new Array(this.worldRepresentation.length);
      for (let j = 0; j < this.worldRepresentation.length; j++) {
        result[i][j] = this.worldRepresentation[i][j];
      }
    }
    return result;
  }
}
