import { Map, MapSize } from '../../map/map';
import { WorldPopulationBuilder } from '../world/world-population-builder';
import { MapBuilder } from './map-builder';

describe('MapBuilder', () => {
  let instance: MapBuilder;
  const worldPopulationBuilderSpy = jasmine.createSpyObj('WorldPopulationBuilder', ['build']);
  const shipSpy = jasmine.createSpyObj('WorldPopulationBuilder', ['getId']);
  const mapSize: MapSize = { x: 10, y: 10 };

  beforeEach((() => {
    shipSpy.getId.and.returnValue(1);
    worldPopulationBuilderSpy.build.and.returnValue({});
    instance = new MapBuilder(worldPopulationBuilderSpy);
  }));

  describe('build', () => {
    it('should call worldPopulationBuilder build to be called', () => {
      instance.build(mapSize, [shipSpy]);

      expect(worldPopulationBuilderSpy.build).toHaveBeenCalled();
    });

    it('should call ship getId', () => {
      instance.build(mapSize, [shipSpy]);

      expect(shipSpy.getId).toHaveBeenCalled();
    });

    it('should return right object type', () => {
      const result = instance.build(mapSize, [shipSpy]);

      expect(result instanceof Map).toBeTruthy();
    });
  });
});
