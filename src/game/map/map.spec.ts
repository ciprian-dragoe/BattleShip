import { Location, Map } from './map';
import { MapLegend } from './map-legend';

describe('Map', () => {
  let instance: Map;
  let world;
  const shipIds = [100];
  const shipLocation: Location = {xAxis: 0, yAxis: 1};
  const emptyLocation: Location = {xAxis: 0, yAxis: 0};
  beforeEach((() => {
    world = [
      [0, 100],
      [0, 100]
    ];
    instance = new Map(world, shipIds);
  }));

  describe('attackLocation', () => {
    it('should return right value of hit location', () => {
      const result = instance.attackLocation(shipLocation);

      expect(result).toBe(100);
    });

    it('should set ship hit value when ship is hit', () => {
      instance.attackLocation(shipLocation);

      expect(instance.getState()[0][1]).toBe(MapLegend.Player1ShipHit);
    });

    it('should set empty area damaged value when nothing hit', () => {
      instance.attackLocation(emptyLocation);

      expect(instance.getState()[0][0]).toBe(MapLegend.DamagedEmpty);
    });

    it('should maintain ship damaged if attacked again', () => {
      instance.attackLocation(shipLocation);
      instance.attackLocation(shipLocation);

      expect(instance.getState()[0][1]).toBe(MapLegend.Player1ShipHit);
    });
  });

  describe('getState', () => {
    it('should return map', () => {
      expect(instance.getState()).toEqual(world);
    });

    it('should return a new instance of the map then the given one', () => {
      expect(instance.getState() !== world).toBeTruthy();
    });
  });
});
