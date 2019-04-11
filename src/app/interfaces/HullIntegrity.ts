import { HullState } from './HullState';
import { MapCell } from './MapCell';

export interface HullIntegrity {
  mapLocation: MapCell;
  healthValue: number;
  hullState: HullState;
}
