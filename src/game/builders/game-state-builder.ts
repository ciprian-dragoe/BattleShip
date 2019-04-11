import { MapSize } from '../game-objects/map/map';
import { Ship } from '../game-objects/ship/ship';
import { Map } from '../game-objects/map/map';
import { MapBuilder } from './map-builder';
import { ShipBuilder } from './ship-builder';

export interface GameState {
  map: Map;
  ships: Ship[];
}

export interface GameOptions {
  mapSize: MapSize;
  Player1Ships: string[];
}

export class GameStateBuilder {
  constructor(
    private shipBuilder: ShipBuilder,
    private mapBuilder: MapBuilder) {
  }

  build(gameOptions: GameOptions): GameState {
    const ships = this.buildShips(gameOptions.Player1Ships);
    const map = this.mapBuilder.build(gameOptions.mapSize, ships);

    return {
      map,
      ships
    };
  }

  private buildShips(shipTypes: string[]): Ship[] {
    const result = [];
    shipTypes.forEach(type => result.push(this.shipBuilder.build(type)));
    return result;
  }
}
