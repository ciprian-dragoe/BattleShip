import { MapSize } from '../game-objects/map/map';
import { Ship } from '../game-objects/ship/ship';
import { Map } from '../game-objects/map/map';
import { WorldWithShipBuilder } from './world-with-ship-builder';

export class MapBuilder {

  constructor(
    private worldBuilder: WorldWithShipBuilder) {
  }

  build(mapSize: MapSize, ships: Ship[]): Map {
    const worldRepresentation = this.worldBuilder.build(ships, mapSize);
    const shipIds = ships.map(ship => ship.getId());
    return new Map(worldRepresentation, shipIds);
  }
}
