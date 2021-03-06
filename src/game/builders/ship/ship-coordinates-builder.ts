import { Location } from '../../map/map';
import { MapLegend } from '../../map/map-legend';
import { Ship } from '../../ship/ship';

export class ShipCoordinatesBuilder {
  constructor() {
  }

  build(ship: Ship, map: number[][]): Location[] {
    let shipCoordinates: Location[];
    do {
      const startCoordinates = this.getRandomCoordinate(map);
      shipCoordinates = this.generateShipCoordinates(map, ship, startCoordinates);
    } while (!shipCoordinates);

    return shipCoordinates;
  }

  private getRandomCoordinate(map: number[][]): Location {
    const x = Math.floor(Math.random() * map.length);
    const y = Math.floor(Math.random() * map[x].length);
    return {
      xAxis: x,
      yAxis: y
    };
  }

  private generateShipCoordinates(map: number[][], ship: Ship, startCoordinate: Location): Location[] {
    let result = [];
    const schematic = ship.getSchematic();
    for (const part of schematic) {
      const possibleLocation = this.mapSchematicPartToMap(part, startCoordinate);
      result.push(possibleLocation);
      if (!this.IsValidLocation(map, possibleLocation)) {
        result = null;
        break;
      }
    }

    return result;
  }

  private mapSchematicPartToMap(part, startCoordinate: Location) {
    return { xAxis: part.xAxis + startCoordinate.xAxis, yAxis: part.yAxis + startCoordinate.yAxis };
  }

  private IsValidLocation(map: number[][], possibleLocation: Location) {
    return map[possibleLocation.xAxis][possibleLocation.yAxis] === MapLegend.IntactEmpty;
  }
}
