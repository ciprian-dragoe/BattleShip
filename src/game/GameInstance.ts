import { GameState } from './builders/game-state-builder';
import { Location } from './game-objects/map/map';

export class GameInstance {
  constructor(private gameState: GameState) {
  }

  launchAttack(mapLocation: Location) {
    const shipId = this.gameState.map.attackLocation(mapLocation);
    this.processShipHit(shipId);
  }

  getCurrentState() {
    return {
      isGameOver: this.getGameStatus(),
      map: this.gameState.map.getWorldState()
    };
  }

  private processShipHit(shipId: number) {
    const hitShip = this.gameState.ships.find(ship => ship.getId() === shipId);
    if (hitShip) {
      hitShip.takeHit();
    }
  }

  private getGameStatus(): boolean {
    let shipHealth = 0;
    this.gameState.ships.forEach(ship => shipHealth += ship.getCurrentHealth());
    return shipHealth === 0;
  }
}
