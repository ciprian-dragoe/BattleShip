import { Injectable } from '@angular/core';
import { Game } from '../interfaces/Game';
import { MapBuilderService } from './map-builder.service';

@Injectable({
  providedIn: 'root'
})
export class GameBuilderService {

  constructor(
    private mapBuilder: MapBuilderService
  ) {
  }

  build(): Game {
    const matrix = this.mapBuilder.build(10, 10);

    return {
      Map: matrix,
      Ships: ''
    };
  }
}
