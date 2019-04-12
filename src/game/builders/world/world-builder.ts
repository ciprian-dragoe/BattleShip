import { MapSize } from '../../game-objects/map/map';
import { MapLegend } from '../../game-objects/map/map-legend';

export class WordBuilder {
  build(mapSize: MapSize): number[][] {
    const result = [];
    for (let i = 0; i < mapSize.x; i++) {
      result[i] = new Array(mapSize.y);
      for (let j = 0; j < mapSize.y; j++) {
        result[i][j] = MapLegend.IntactEmpty;
      }
    }
    return result;
  }
}
