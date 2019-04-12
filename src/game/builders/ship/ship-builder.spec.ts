import { BattleShip } from '../../game-objects/ship/battle-ship';
import { Destroyer } from '../../game-objects/ship/destroyer';
import { SHIP_TYPES } from '../../game-objects/ship/ship-types';
import { ShipBuilder } from './ship-builder';

describe('ShipBuilder', () => {
  let instance: ShipBuilder;

  beforeEach((() => {
    instance = new ShipBuilder();
  }));

  describe('build', () => {
    it('should create object with right id', () => {
      const result = instance.build(SHIP_TYPES.destroyer);

      expect(result.getId()).toBe(100);
    });

    it('should create object instance with type of BattleShip', () => {
      const result = instance.build(SHIP_TYPES.battleShip);

      expect(result instanceof BattleShip).toBeTruthy();
    });

    it('should create object instance with type of Destroyer', () => {
      const result = instance.build(SHIP_TYPES.destroyer);

      expect(result instanceof Destroyer).toBeTruthy();
    });

    it('should increment ship id after each build', () => {
      instance.build(SHIP_TYPES.destroyer);
      const result = instance.build(SHIP_TYPES.destroyer);

      expect(result.getId()).toBeGreaterThan(100);
    });
  });
});
