import { BattleShip } from '../models/BattleShip';
import { Destroyer } from '../models/Destroyer';
import { Ship } from '../models/Ship';
import { SHIP_TYPES } from '../interfaces/ShipTypes';

export class ShipBuilder {
  private readonly shipTypeBuilder = {
    [SHIP_TYPES.battleShip]: () => new BattleShip(),
    [SHIP_TYPES.destroyer]: () => new Destroyer()
  };

  build(shipType: string): Ship {
    return this.shipTypeBuilder[shipType]();
  }
}
