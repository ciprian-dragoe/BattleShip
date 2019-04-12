import { Ship } from './ship';

class Mock extends Ship {
  constructor() {
    super(1, 1);
  }
}

describe('Ship', () => {
  let instance: Ship;
  beforeEach((() => {
    instance = new Mock();
  }));

  describe('takeHit', () => {
    it('should decrease health', () => {
      instance.takeHit();

      expect(instance.getCurrentHealth()).toBe(0);
    });
  });

  describe('getCurrentHealth', () => {
    it('should return health with witch class instantiated', () => {
      expect(instance.getCurrentHealth()).toBe(1);
    });
  });

  describe('getId', () => {
    it('should get ship id', () => {
      expect(instance.getId()).toBe(1);
    });
  });
});
