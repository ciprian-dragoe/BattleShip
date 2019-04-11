import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../interfaces/Game';
import { GameBuilderService } from '../services/game-builder.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'bat-game-selector',
  templateUrl: './game-selector.component.html',
  styleUrls: ['./game-selector.component.css']
})
export class GameSelectorComponent implements OnInit {
  @Input() currentGame: Game;
  @Output() currentGameChanged = new EventEmitter<Game>();

  constructor(
    private modalService: ModalService,
    private gameBuilder: GameBuilderService) {
  }

  ngOnInit() {
  }

  resumeGame() {
    this.modalService.close('game-selector');
  }

  newGame() {
    const newGame = this.gameBuilder.build();
    this.currentGameChanged.emit(newGame);
    this.modalService.close('game-selector');
  }

}
