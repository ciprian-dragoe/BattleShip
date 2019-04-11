import { Injectable } from '@angular/core';
import { GameInstance } from '../interfaces/GameInstance';
import { GameOptions } from '../interfaces/GameOptions';
import { MapLegend } from '../interfaces/MapLegend';
import { Ship } from '../models/Ship';
import { MapBuilderService } from './map-builder.service';
import { ShipBuilderService } from './ship-builder.service';
import { ShipPlacerService } from './ship-placer.service';

@Injectable({
  providedIn: 'root'
})
export class GameBuilderService {

  constructor(
    private mapBuilder: MapBuilderService,
    private shipBuilder: ShipBuilderService,
    private shipPlacer: ShipPlacerService
  ) {
  }

  build(gameOptions: GameOptions): GameInstance {
    const map = this.mapBuilder.build(gameOptions.MapSizeXaxis, gameOptions.MapSizeYaxis);
    const ships = this.buildShips(gameOptions.Player1Ships);
    this.placeShipsOnMap(ships, map);

    return {
      map: map,
      ships: ships
    };
  }

  private buildShips(shipTypes: string[]): Ship[] {
    const result = [];
    shipTypes.forEach(type => result.push(this.shipBuilder.build(type)));
    return result;
  }

  private placeShipsOnMap(ships: Ship[], map: number[][]): void {
    ships.forEach(ship => {
      const shipCoordinates = this.shipPlacer.getMapCoordinates(ship, map);
      shipCoordinates.map(coordinate => map[coordinate.x][coordinate.y] = MapLegend.Player1ShipHidden);
      ship.updateLocation(shipCoordinates);
    });
  }
}
