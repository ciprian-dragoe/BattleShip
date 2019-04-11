import { Location, MapSize } from '../game-objects/map/map';
import { MapLegend } from '../game-objects/map/map-legend';
import { Ship } from '../game-objects/ship/ship';
import { WordRepresentationBuilder } from './world-representation-builder';

export class WorldWithShipBuilder {
  private world: number[][];

  constructor(private worldBuild: WordRepresentationBuilder) {
  }

  build(ships: Ship[], mapSize: MapSize): number[][] {
    this.world = this.worldBuild.build(mapSize);
    ships.forEach(ship => {
      this.representShipOnMap(ship);
    });
    return this.world;
  }

  private representShipOnMap(ship: Ship) {
    let shipCoordinates: Location[];
    do {
      const startCoordinates = this.getRandomCoordinate(this.world);
      shipCoordinates = this.generateShipCoordinates(this.world, ship, startCoordinates);
    } while (shipCoordinates);

    this.updateWorldCoordinates(shipCoordinates, ship.getId());
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
    const shipDesign = ship.getDesignOnMap();
    for (const part of shipDesign) {
      const possibleLocation = this.generateShipCoordinate(part, startCoordinate);
      result.push(possibleLocation);
      if (!this.IsValidLocation(map, possibleLocation)) {
        result = null;
        break;
      }
    }

    return result;
  }

  private updateWorldCoordinates(shipCoordinates: Location[], shipId: number) {
    shipCoordinates.forEach(coordinate => this.world[coordinate.xAxis][coordinate.yAxis] = shipId);
  }

  private generateShipCoordinate(part, startCoordinate: Location) {
    return { xAxis: part.xAxis + startCoordinate.xAxis, yAxis: part.yAxis + startCoordinate.yAxis };
  }

  private IsValidLocation(map: number[][], possibleLocation: Location) {
    return map[possibleLocation.xAxis][possibleLocation.yAxis] !== MapLegend.IntactEmpty;
  }
}
