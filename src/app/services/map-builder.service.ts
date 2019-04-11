import { Injectable } from '@angular/core';
import { CellStatus } from '../interfaces/CellStatus';

@Injectable({
  providedIn: 'root'
})
export class MapBuilderService {

  constructor() {
  }

  build(rows: number, columns: number): number[][] {
    const map = [];
    for (let i = 0; i < rows; i++) {
      map[i] = new Array(columns);
      for (let j = 0; j < columns; j++) {
        map[i][j] = CellStatus.Intact;
      }
    }

    return map;
  }
}
