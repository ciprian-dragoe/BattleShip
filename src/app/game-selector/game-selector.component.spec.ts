import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameInstance } from '../../game/GameInstance';
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
  const newGame: GameInstance = {} as GameInstance;

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
