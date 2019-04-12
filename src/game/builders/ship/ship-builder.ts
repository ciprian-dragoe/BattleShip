import { BattleShip } from '../../game-objects/ship/battle-ship';
import { Destroyer } from '../../game-objects/ship/destroyer';
import { SHIP_TYPES } from '../../game-objects/ship/ship-types';

export class ShipBuilder {
  private static LastShipId = 100;

  private readonly shipTypeBuilder = {
    [SHIP_TYPES.battleShip]: () => new BattleShip(ShipBuilder.LastShipId++),
    [SHIP_TYPES.destroyer]: () => new Destroyer(ShipBuilder.LastShipId++)
  };

  build(shipType: string) {
    return this.shipTypeBuilder[shipType]();
  }
}
