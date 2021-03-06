import { GameOptions, GameStateBuilder } from './builders/game/game-state-builder';
import { MapBuilder } from './builders/map/map-builder';
import { ShipBuilder } from './builders/ship/ship-builder';
import { ShipCoordinatesBuilder } from './builders/ship/ship-coordinates-builder';
import { WorldBuilder } from './builders/world/world-builder';
import { WorldPopulationBuilder } from './builders/world/world-population-builder';
import { GameState } from './game/GameState';
import { Location } from './map/map';

export class GameInstance {
  private static gameState: GameState;

  private constructor() {
  }

  static start(gameOptions: GameOptions): GameState {
    const gameStateBuilder = new GameStateBuilder(
      new ShipBuilder(),
      new MapBuilder(new WorldPopulationBuilder(new WorldBuilder(), new ShipCoordinatesBuilder())));
    GameInstance.gameState = gameStateBuilder.build(gameOptions);
    return GameInstance.gameState;
  }

  static attack(mapLocation: Location) {
    GameInstance.gameState.attack(mapLocation);
  }

  static state() {
    return {
      isGameOver: GameInstance.gameState.isGameOver(),
      state: GameInstance.gameState.state()
    };
  }
}
