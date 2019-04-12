import { GameState } from '../../game/GameState';
import { GameOptions, GameStateBuilder } from './game-state-builder';

describe('GameStateBuilder', () => {
  let instance: GameStateBuilder;
  const shipBuilderSpy = jasmine.createSpyObj('ShipBuilder', ['build']);
  const mapBuilderSpy = jasmine.createSpyObj('MapBuilder', ['build']);
  const options: GameOptions = {mapSize: { x: 10, y: 10}, Player1Ships: ['mock1', 'mock2']};

  beforeEach((() => {
    shipBuilderSpy.build.calls.reset();
    mapBuilderSpy.build.calls.reset();
    shipBuilderSpy.build.and.returnValue({});
    mapBuilderSpy.build.and.returnValue({});
    instance = new GameStateBuilder(shipBuilderSpy, mapBuilderSpy);
  }));

  describe('build', () => {
    it('should call mapBuilder build', () => {
      instance.build(options);

      expect(mapBuilderSpy.build).toHaveBeenCalled();
    });

    it('should call shipBuilder correct number of times', () => {
      instance.build(options);

      expect(shipBuilderSpy.build).toHaveBeenCalledTimes(options.Player1Ships.length);
    });

    it('should return right object type', () => {
      const result = instance.build(options);

      expect(result instanceof GameState).toBeTruthy();
    });
  });
});
