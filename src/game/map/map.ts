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
    const targetHit = this.worldRepresentation[location.xAxis][location.yAxis];
    this.updateMap(targetHit, location);

    return targetHit;
  }

  getState(): number[][] {
    const result = [];
    for (let i = 0; i < this.worldRepresentation.length; i++) {
      result[i] = new Array(this.worldRepresentation.length);
      for (let j = 0; j < this.worldRepresentation.length; j++) {
        result[i][j] = this.worldRepresentation[i][j];
      }
    }
    return result;
  }

  private updateMap(targetHit, location: Location) {
    if (this.shipIdsOnMap.find(id => id === targetHit)) {
      this.worldRepresentation[location.xAxis][location.yAxis] = MapLegend.Player1ShipHit;
    } else {
      if (targetHit !== MapLegend.Player1ShipHit) {
        this.worldRepresentation[location.xAxis][location.yAxis] = MapLegend.DamagedEmpty;
      }
    }
  }
}
