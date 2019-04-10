import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Game } from '../models/Game';
import { GameBuilderService } from '../services/game-builder.service';
import { ModalService } from '../services/modal.service';

import { GameSelectorComponent } from './game-selector.component';

@Component({selector: 'bat-modal', template: ''})
class ModalStubComponent {
}

describe('GameSelectorComponent', () => {
  let component: GameSelectorComponent;
  let fixture: ComponentFixture<GameSelectorComponent>;
  let modalSpy: any;
  let gameBuilderSpy: any;
  const newGame: Game = {} as Game;

  beforeEach(async(() => {
    modalSpy = jasmine.createSpyObj('ModalService', ['close']);
    gameBuilderSpy = jasmine.createSpyObj('GameBuilderService', ['build']);
    gameBuilderSpy.build.and.returnValue(newGame);
    TestBed.configureTestingModule({
      declarations: [
        GameSelectorComponent,
        ModalStubComponent,
      ],
      providers: [
        {provide: ModalService, useValue: modalSpy},
        {provide: GameBuilderService, useValue: gameBuilderSpy}
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('newGame', () => {
    it('should call game builder build', () => {
      component.newGame();

      expect(gameBuilderSpy.build).toHaveBeenCalled();
    });

    it('should emit new game', () => {
      component.currentGameChanged.subscribe(game => expect(game).toBe(newGame));

      component.newGame();
    });

    it('should call modal close with right id', () => {
      component.newGame();

      expect(modalSpy.close).toHaveBeenCalledWith('game-selector');
    });
  });

  describe('resumeGame', () => {
    it('should call modal close with right id', () => {
      component.resumeGame();

      expect(modalSpy.close).toHaveBeenCalledWith('game-selector');
    });
  });
});
