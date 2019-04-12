import { Location } from '../../game-objects/map/map';
import { ShipCoordinatesBuilder } from './ship-coordinates-builder';

describe('ShipCoordinatesBuilder', () => {
  let instance: ShipCoordinatesBuilder;
  const shipSpy = jasmine.createSpyObj('Ship', ['getSchematic']);
  const untouchedMap = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  const populatedMap1 = [
    [0, 0, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ];

  const populatedMap2 = [
    [1, 0, 1, 1, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 0, 1],
    [1, 1, 1, 1, 1]
  ];

  beforeEach((() => {
    shipSpy.getSchematic.and.returnValue([{xAxis: 0, yAxis: 0}, {xAxis: 0, yAxis: 1}] as Location[]);
    instance = new ShipCoordinatesBuilder();
  }));

  describe('build', () => {
    it('returns ship coordinates that are not larger then map size', () => {
      const result: Location[] = instance.build(shipSpy, untouchedMap);

      expect(result.every(location => location.yAxis <= 4 && location.xAxis <= 4)).toBeTruthy();
    });

    it('returns ship coordinates at the only possible valid location case 1', () => {
      const result: Location[] = instance.build(shipSpy, populatedMap1);

      expect(result[0].xAxis).toBe(0);
      expect(result[0].yAxis).toBe(0);
      expect(result[1].xAxis).toBe(0);
      expect(result[1].yAxis).toBe(1);
    });

    it('returns ship coordinates at the only possible valid location case 2', () => {
      const result: Location[] = instance.build(shipSpy, populatedMap2);

      expect(result[0].xAxis).toBe(1);
      expect(result[0].yAxis).toBe(2);
      expect(result[1].xAxis).toBe(1);
      expect(result[1].yAxis).toBe(3);
    });
  });
});
