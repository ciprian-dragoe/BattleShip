import { Injectable } from '@angular/core';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameBuilderService {

  constructor() {
  }

  build(): Game {
    const matrix = [];
    for (let i = 0; i < 9; i++) {
      matrix[i] = new Array(9);
    }

    return {
      Map: matrix,
      Ships: ''
    };
  }
}
