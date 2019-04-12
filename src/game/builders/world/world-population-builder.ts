import { Location, MapSize } from '../../game-objects/map/map';
import { Ship } from '../../game-objects/ship/ship';
import { ShipCoordinatesBuilder } from '../ship/ship-coordinates-builder';
import { WorldBuilder } from '../world/world-builder';

export class WorldPopulationBuilder {
  private world: number[][];

  constructor(
    private worldBuilder: WorldBuilder,
    private shipCoordinates: ShipCoordinatesBuilder) {
  }

  build(ships: Ship[], mapSize: MapSize): number[][] {
    this.world = this.worldBuilder.build(mapSize);
    this.placeShipsOnWorld(ships);

    return this.world;
  }

  private placeShipsOnWorld(ships: Ship[]) {
    ships.forEach(ship => {
      const shipCoordinates = this.shipCoordinates.build(ship, this.world);
      this.placeShipOnWorld(shipCoordinates, ship.getId());
    });
  }

  private placeShipOnWorld(shipCoordinates: Location[], shipId: number) {
    shipCoordinates.forEach(coordinate => this.world[coordinate.xAxis][coordinate.yAxis] = shipId);
  }
}
