import { MapCell } from '../interfaces/MapCell';
import { MapLegend } from '../interfaces/MapLegend';
import { Ship } from '../models/Ship';

export class ShipPlacer {

  constructor() {
  }

  getMapCoordinates(ship: Ship, map): MapCell[] {
    let result = [];
    const mapCopy: number[][] = JSON.parse(JSON.stringify(map));
    let iterations = mapCopy.length * mapCopy.length;

    while (iterations && result.length > 0) {
      const coordinate = this.getRandomCoordinate(mapCopy);
      const shipCoordinates = this.getShipCoordinates(mapCopy, ship, coordinate);
      if (shipCoordinates != null) {
        result = shipCoordinates;
      }
      iterations--;
    }

    return result;
  }

  private getRandomCoordinate(map: number[][]): MapCell {
    const Xaxis = Math.floor(Math.random() * map.length);
    const Yaxis = Math.floor(Math.random() * map[Xaxis].length);
    return {
      x: Xaxis,
      y: Yaxis
    };
  }

  private getShipCoordinates(map: number[][], ship: Ship, coordinate: MapCell): MapCell[] {
    let result: MapCell[] = [];
    for (const part of ship.integrity) {
      const possibleLocation: MapCell = {x: part.mapLocation.x + coordinate.x, y: part.mapLocation.y + coordinate.y};
      result.push(possibleLocation);
      if (!this.IsValidLocation(map, possibleLocation)) {
        result = null;
        break;
      }
    }

    return result;
  }

  private IsValidLocation(map: number[][], possibleLocation: MapCell) {
    return map[possibleLocation.x][possibleLocation.y] !== MapLegend.IntactEmpty;
  }
}
