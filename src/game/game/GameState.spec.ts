import { Location } from '../map/map';
import { GameState } from './GameState';

describe('GameState', () => {
  let instance: GameState;
  const mapSpy = jasmine.createSpyObj('Map', ['attackLocation', 'getState']);
  const shipSpy = jasmine.createSpyObj('Ship', ['getId', 'takeHit', 'getCurrentHealth']);
  const location: Location = {xAxis: 1, yAxis: 1};
  const setupShipHitDependencies = () => {
    mapSpy.attackLocation.and.returnValue(100);
    shipSpy.getCurrentHealth.and.returnValue(0);
  };

  const setupShipMissDependencies = () => {
    mapSpy.attackLocation.and.returnValue(0);
    shipSpy.getCurrentHealth.and.returnValue(1);
  };
  beforeEach((() => {
    shipSpy.takeHit.calls.reset();
    mapSpy.getState.and.returnValue([100]);
    shipSpy.getId.and.returnValue(100);
    instance = new GameState(mapSpy, [shipSpy]);
  }));

  describe('attack', () => {
    it('should call map attackLocation with right parameter', () => {
      setupShipHitDependencies();

      instance.attack(location);

      expect(mapSpy.attackLocation).toHaveBeenCalledWith(location);
    });

    it('should call ship getId', () => {
      setupShipHitDependencies();

      instance.attack(location);

      expect(shipSpy.getId).toHaveBeenCalled();
    });

    it('should call ship takeHit when ship id matches hit location', () => {
      setupShipHitDependencies();

      instance.attack(location);

      expect(shipSpy.takeHit).toHaveBeenCalled();
    });

    it('should NOT call ship takeHit when ship id does not match hit location', () => {
      setupShipMissDependencies();

      instance.attack(location);

      expect(shipSpy.takeHit).not.toHaveBeenCalled();
    });
  });

  describe('IsGameOver', () => {
    it('should return false when ships still have health', () => {
      setupShipMissDependencies();

      const result = instance.isGameOver();

      expect(result).toBe(false);
    });

    it('should return true when ships do not have health', () => {
      setupShipHitDependencies();

      const result = instance.isGameOver();

      expect(result).toBe(true);
    });
  });

  describe('state', () => {
    it('calls map getState', () => {
      const result = instance.state();

      expect(mapSpy.getState).toHaveBeenCalledTimes(1);
    });
  });
});
