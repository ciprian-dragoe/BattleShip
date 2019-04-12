import { MapSize } from '../../map/map';
import { Ship } from '../../ship/ship';
import { Map } from '../../map/map';
import { WorldPopulationBuilder } from '../world/world-population-builder';

export class MapBuilder {

  constructor(
    private worldBuilder: WorldPopulationBuilder) {
  }

  build(mapSize: MapSize, ships: Ship[]): Map {
    const worldRepresentation = this.worldBuilder.build(ships, mapSize);
    const shipIds = ships.map(ship => ship.getId());
    return new Map(worldRepresentation, shipIds);
  }
}
