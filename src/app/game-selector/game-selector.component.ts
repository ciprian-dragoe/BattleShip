import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameOptions } from '../../game/builders/game/game-state-builder';
import { SHIP_TYPES } from '../../game/ship/ship-types';
import { GameInstance } from '../../game/GameInstance';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'bat-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.css']
})
export class GameSelectorComponent implements OnInit {
  @Input() currentGame: GameInstance;
  @Output() currentGameChanged = new EventEmitter<GameInstance>();

  constructor(
    private modalService: ModalService) {
  }

  ngOnInit() {
  }

  resumeGame() {
    this.modalService.close('game-selector');
  }

  newGame() {
    const defaultGameOptions: GameOptions = {
      mapSize: { x: 10, y: 10 },
      Player1Ships: [SHIP_TYPES.battleShip, SHIP_TYPES.destroyer, SHIP_TYPES.destroyer]
    };
    this.currentGameChanged.emit();
    this.modalService.close('game-selector');
  }

}
