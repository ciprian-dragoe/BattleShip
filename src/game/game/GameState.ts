import { Location, Map } from '../map/map';
import { Ship } from '../ship/ship';

export class GameState {
  private map: Map;
  private ships: Ship[];

  constructor(map: Map, ships: Ship[]) {
    this.map = map;
    this.ships = ships;
  }

  attack(mapLocation: Location) {
    const shipId = this.map.attackLocation(mapLocation);
    this.hitShip(shipId);
  }

  isGameOver() {
    let shipsHealth = 0;
    this.ships.forEach(ship => shipsHealth += ship.getCurrentHealth());

    return shipsHealth === 0;
  }

  state(): number[][] {
    return this.map.getWorldState();
  }

  private hitShip(shipId: number) {
    const hitShip = this.ships.find(ship => ship.getId() === shipId);
    if (hitShip) {
      hitShip.takeHit();
    }
  }
}
