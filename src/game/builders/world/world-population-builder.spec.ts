import { Location, MapSize } from '../../map/map';
import { ShipCoordinatesBuilder } from '../ship/ship-coordinates-builder';
import { WorldBuilder } from './world-builder';
import { WorldPopulationBuilder } from './world-population-builder';

describe('WorldPopulationBuilder', () => {
  let instance: WorldPopulationBuilder;
  const worldBuilderSpy = jasmine.createSpyObj('WorldBuilder', ['build']);
  const shipCoordinatesBuilderSpy = jasmine.createSpyObj('ShipCoordinatesBuilder', ['build']);
  const shipSpy = jasmine.createSpyObj('Ship', ['getId']);
  const mapSize: MapSize = {x: 10, y: 10};

  beforeEach((() => {
    shipSpy.getId.and.returnValue(100);
    worldBuilderSpy.build.and.returnValue([[0, 0]]);
    shipCoordinatesBuilderSpy.build.and.returnValue([{xAxis: 0, yAxis: 0}] as Location[]);
    instance = new WorldPopulationBuilder(worldBuilderSpy, shipCoordinatesBuilderSpy);
  }));

  describe('build', () => {
    it('should call worldBuilder build with right parameter', () => {
      instance.build([shipSpy], mapSize);

      expect(worldBuilderSpy.build).toHaveBeenCalledWith(mapSize);
    });

    it('should call spaceCoordinatesBuilder build', () => {
      instance.build([shipSpy], mapSize);

      expect(shipCoordinatesBuilderSpy.build).toHaveBeenCalled();
    });

    it('should call ship getId', () => {
      instance.build([shipSpy], mapSize);

      expect(shipSpy.getId).toHaveBeenCalled();
    });

    it('should return world populated with ship id ad correct location', () => {
      const result = instance.build([shipSpy], mapSize);

      expect(result[0][0]).toBe(100);
      expect(result[0][1]).toBe(0);
    });
  });
});
