import { TestBed } from '@angular/core/testing';
import { HullState } from '../interfaces/HullState';
import { SHIP_TYPES } from '../interfaces/ShipTypes';

import { ShipBuilderService } from './ship-builder.service';

describe('ShipBuilderService', () => {
  let instance: ShipBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    instance = TestBed.get(ShipBuilderService);
  });

  it('should be created', () => {
    expect(instance).toBeTruthy();
  });

  describe('build', () => {
    it('should create destroyer with correct remaining life', () => {
      const result = instance.build(SHIP_TYPES.destroyer);

      expect(result.remainingHealth).toBe(4);
    });

    it('should create destroyer with hull integrity intact', () => {
      const result = instance.build(SHIP_TYPES.destroyer);

      expect(result.integrity[0].hullState).toBe(HullState.Intact);
    });

    it('should create destroyer with hull correct health value', () => {
      const result = instance.build(SHIP_TYPES.destroyer);

      expect(result.integrity[0].healthValue).toBe(1);
    });

    it('should create destroyer with hull location default', () => {
      const result = instance.build(SHIP_TYPES.destroyer);

      expect(result.integrity[0].mapLocation.x).toBe(0);
      expect(result.integrity[0].mapLocation.y).toBe(0);
    });

    it('should create battleship with correct remaining life', () => {
      const result = instance.build(SHIP_TYPES.battleShip);

      expect(result.remainingHealth).toBe(5);
    });

    it('should create battleship with hull integrity intact', () => {
      const result = instance.build(SHIP_TYPES.battleShip);

      expect(result.integrity[0].hullState).toBe(HullState.Intact);
    });

    it('should create battleship with hull correct health value', () => {
      const result = instance.build(SHIP_TYPES.battleShip);

      expect(result.integrity[0].healthValue).toBe(1);
    });

    it('should create battleship with hull location default', () => {
      const result = instance.build(SHIP_TYPES.battleShip);

      expect(result.integrity[0].mapLocation.x).toBe(0);
      expect(result.integrity[0].mapLocation.y).toBe(0);
    });
  });
});
