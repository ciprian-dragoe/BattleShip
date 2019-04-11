import { GameInstance } from '../interfaces/GameInstance';
import { MapCell } from '../interfaces/MapCell';
import { MapLegend } from '../interfaces/MapLegend';

export class GameEngine {
  constructor(private gameInstance: GameInstance) {
  }

  launchAttack(location: MapCell) {
    this.gameInstance.map[location.x][location.y] = this.GetAttackResponse(location);
    this.updateGameWinner();
  }

  private GetAttackResponse(location: MapCell) {
    let result = MapLegend.DamagedEmpty;
    for (const ship of this.gameInstance.ships) {
      const response = ship.getAttackedResponse(location);
      if (response === MapLegend.Player1ShipHit) {
        result = response;
        break;
      }
    }

    return result;
  }

  private updateGameWinner() {
    let shipsHealth = 0;
    this.gameInstance.ships.forEach(ship => shipsHealth += ship.remainingHealth);
    this.gameInstance.gameFinished = shipsHealth === 0;
  }
}
