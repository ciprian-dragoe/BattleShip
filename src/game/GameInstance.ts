import { GameState } from './game-objects/game/GameState';
import { Location } from './game-objects/map/map';

export class GameInstance {
  constructor(private gameState: GameState) {
  }

  attack(mapLocation: Location) {
    this.gameState.attack(mapLocation);
  }

  state() {
    return {
      isGameOver: this.gameState.isGameOver(),
      map: this.gameState.state()
    };
  }
}
