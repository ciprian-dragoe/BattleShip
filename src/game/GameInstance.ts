import { GameOptions, GameStateBuilder } from './builders/game/game-state-builder';
import { MapBuilder } from './builders/map/map-builder';
import { ShipBuilder } from './builders/ship/ship-builder';
import { ShipCoordinatesBuilder } from './builders/ship/ship-coordinates-builder';
import { WorldBuilder } from './builders/world/world-builder';
import { WorldPopulationBuilder } from './builders/world/world-population-builder';
import { GameState } from './game/GameState';
import { Location } from './map/map';

export class GameInstance {
  constructor(private gameState: GameState) {
  }

  restart(gameOptions: GameOptions) {
    // to integrate with your IOC later in your project
    const gameStateBuilder = new GameStateBuilder(
      new ShipBuilder(),
      new MapBuilder(new WorldPopulationBuilder(new WorldBuilder(), new ShipCoordinatesBuilder())));
    this.gameState = gameStateBuilder.build(gameOptions);
  }

  attack(mapLocation: Location) {
    this.gameState.attack(mapLocation);
  }

  state() {
    return {
      isGameOver: this.gameState.isGameOver(),
      state: this.gameState.state()
    };
  }
}
