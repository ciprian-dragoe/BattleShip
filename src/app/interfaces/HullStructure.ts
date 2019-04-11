import { HullIntegrity } from './HullIntegrity';
import { MapCell } from './MapCell';

export interface HullStructure {
  Location: MapCell;
  healthValue: number;
  hullIntegrity: HullIntegrity;
}
