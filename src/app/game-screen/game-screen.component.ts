import { Component, AfterViewInit } from '@angular/core';
import { Game } from '../interfaces/Game';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'bat-game-screen',
  templateUrl: './game-screen.component.html',
  styleUrls: ['./game-screen.component.css']
})
export class GameScreenComponent implements AfterViewInit {

  gameInstance: Game;

  constructor(private modalService: ModalService) {
  }

  newGame() {
    this.modalService.open('game-selector');
  }

  ngAfterViewInit(): void {
    if (!this.gameInstance) {
      this.modalService.open('game-selector');
    }
  }
}
