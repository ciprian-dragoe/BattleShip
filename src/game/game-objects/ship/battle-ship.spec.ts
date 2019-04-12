import { BattleShip } from './battle-ship';

describe('BattleShip', () => {
  let instance: BattleShip;
  beforeEach((() => {
    instance = new BattleShip(1);
  }));

  describe('instantiation', () => {
    it('should set right schematic length', () => {
      expect(instance.getSchematic().length).toBe(5);
    });

    it('should set right health', () => {
      expect(instance.getCurrentHealth()).toBe(5);
    });
  });
});
