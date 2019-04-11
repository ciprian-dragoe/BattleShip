import { HullState } from './HullState';
import { MapCell } from './MapCell';

export interface HullIntegrity {
  Location: MapCell;
  healthValue: number;
  hullState: HullState;
}
