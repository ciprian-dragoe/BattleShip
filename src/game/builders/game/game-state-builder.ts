import { GameState } from '../../game/GameState';
import { MapSize } from '../../map/map';
import { Ship } from '../../ship/ship';
import { MapBuilder } from '../map/map-builder';
import { ShipBuilder } from '../ship/ship-builder';

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

    return new GameState(map, ships);
  }

  private buildShips(shipTypes: string[]): Ship[] {
    const result = [];
    shipTypes.forEach(type => result.push(this.shipBuilder.build(type)));

    return result;
  }
}
