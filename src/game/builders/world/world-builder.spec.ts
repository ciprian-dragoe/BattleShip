import { MapSize } from '../../map/map';
import { MapLegend } from '../../map/map-legend';
import { WorldBuilder } from './world-builder';

describe('WorldBuilder', () => {
  let instance: WorldBuilder;
  const mapSize: MapSize = { x: 3, y: 3};

  beforeEach((() => {
    instance = new WorldBuilder();
  }));

  describe('build', () => {
    it('returns word with correct size', () => {
      const result: number[][] = instance.build(mapSize);

      expect(result.every(array => array.length === 3)).toBeTruthy();
      expect(result.length === 3).toBeTruthy();
    });

    it('returns word with correct default values', () => {
      const result: number[][] = instance.build(mapSize);

      expect(result.every(array => array.every(item => item === MapLegend.IntactEmpty))).toBe(true);
    });
  });
});
