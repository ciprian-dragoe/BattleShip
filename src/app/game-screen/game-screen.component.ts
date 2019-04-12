import { Component, OnInit } from '@angular/core';
import { GameOptions } from '../../game/builders/game/game-state-builder';
import { GameInstance } from '../../game/GameInstance';
import { SHIP_TYPES } from '../../game/ship/ship-types';
import { Location } from '../../game/map/map';

@Component({
  selector: 'bat-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements OnInit {
  private defaultGameOptions: GameOptions = {
    mapSize: { x: 10, y: 10 },
    Player1Ships: [SHIP_TYPES.battleShip, SHIP_TYPES.destroyer, SHIP_TYPES.destroyer]
  };
  private map: number[][];
  private isGameOver: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    GameInstance.start(this.defaultGameOptions);
    this.updateGameState();
  }

  private updateGameState() {
    const currentGameState = GameInstance.state();
    this.map = currentGameState.state;
    this.isGameOver = currentGameState.isGameOver;
  }

  attack(location: Location) {
    GameInstance.attack(location);
    this.updateGameState();
  }
}
