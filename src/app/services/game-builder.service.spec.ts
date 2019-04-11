import { TestBed } from '@angular/core/testing';
import { GameOptions } from '../interfaces/GameOptions';
import { MapLegend } from '../interfaces/MapLegend';
import { GameBuilderService } from './game-builder.service';
import { MapBuilderService } from './map-builder.service';
import { ShipBuilderService } from './ship-builder.service';
import { ShipPlacerService } from './ship-placer.service';

describe('GameBuilderService', () => {
  let instance: GameBuilderService;
  const options: GameOptions = {
    MapSizeXaxis: 10,
    MapSizeYaxis: 10,
    Player1Ships: ['mock']
  };
  const map = [
    [MapLegend.IntactEmpty, MapLegend.IntactEmpty, MapLegend.IntactEmpty],
    [MapLegend.IntactEmpty, MapLegend.IntactEmpty, MapLegend.IntactEmpty],
    [MapLegend.IntactEmpty, MapLegend.IntactEmpty, MapLegend.IntactEmpty]];
  const mapBuilderSpy = jasmine.createSpyObj('MapBuilderService', ['build']);
  mapBuilderSpy.build.and.returnValue(map);
  const shipBuilderSpy = jasmine.createSpyObj('ShipBuilderService', ['build']);
  shipBuilderSpy.build.and.returnValue({});
  const shipPlacerSpy = jasmine.createSpyObj('ShipPlacerService', ['getMapCoordinates']);
  shipPlacerSpy.getMapCoordinates.and.returnValue({});
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: MapBuilderService, useValue: mapBuilderSpy},
        {provide: ShipBuilderService, useValue: mapBuilderSpy},
        {provide: ShipPlacerService, useValue: shipPlacerSpy}
      ]
    });
    instance = TestBed.get(ShipBuilderService);
  });

  it('should be created', () => {
    expect(instance).toBeTruthy();
  });

  describe('build', () => {
    it('should return game finished as false', () => {
      const result = instance.build(options);

      expect(result.gameFinished).toBe(false);
    });
  });
});
