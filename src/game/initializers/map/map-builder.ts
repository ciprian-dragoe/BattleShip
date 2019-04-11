import { MapLegend } from '../interfaces/MapLegend';

export class MapBuilder {

  constructor() {
  }

  build(rows: number, columns: number): number[][] {
    const map = [];
    for (let i = 0; i < rows; i++) {
      map[i] = new Array(columns);
      for (let j = 0; j < columns; j++) {
        map[i][j] = MapLegend.IntactEmpty;
      }
    }

    return map;
  }
}
