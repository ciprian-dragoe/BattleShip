import { Destroyer } from './destroyer';

describe('Destroyer', () => {
  let instance: Destroyer;
  beforeEach((() => {
    instance = new Destroyer(1);
  }));

  describe('instantiation', () => {
    it('should set right schematic length', () => {
      expect(instance.getSchematic().length).toBe(4);
    });

    it('should set right health', () => {
      expect(instance.getCurrentHealth()).toBe(4);
    });
  });
});
