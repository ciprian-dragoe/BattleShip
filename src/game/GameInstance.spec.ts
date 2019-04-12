import { Location } from './map/map';
import { GameInstance } from './GameInstance';

describe('GameInstance', () => {
  let instance: GameInstance;
  const gameStateSpy = jasmine.createSpyObj('GameState', ['attack', 'isGameOver', 'state']);
  const location: Location = {xAxis: 1, yAxis: 1};

  beforeEach((() => {
    gameStateSpy.isGameOver.and.returnValue(true);
    gameStateSpy.state.and.returnValue([]);
    instance = new GameInstance(gameStateSpy);
  }));

  describe('attack', () => {
    it('should call gameState attack with right parameter', () => {
      instance.attack(location);

      expect(gameStateSpy.attack).toHaveBeenCalledWith(location);
    });
  });

  describe('state', () => {
    it('should call gameState isGameOver', () => {
      instance.state();

      expect(gameStateSpy.isGameOver).toHaveBeenCalled();
    });

    it('should call gameState state', () => {
      instance.state();

      expect(gameStateSpy.state).toHaveBeenCalled();
    });

    it('should return right value', () => {
      const result = instance.state();

      expect(result.state.length).toBe(0);
      expect(result.isGameOver).toBe(true);
    });
  });
});
