import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalService } from '../services/modal.service';
import { GameScreenComponent } from './game-screen.component';

@Component({selector: 'bat-game-selector', template: ''})
class GameSelectorStubComponent {
  @Input() currentGame: any;
}

@Component({selector: 'bat-modal', template: ''})
class ModalStubComponent {
}

describe('GameScreenComponent', () => {
  let component: GameScreenComponent;
  let fixture: ComponentFixture<GameScreenComponent>;
  let modalSpy: any;

  beforeEach(async(() => {
    modalSpy = jasmine.createSpyObj('ModalService', ['open']);
    TestBed.configureTestingModule({
      declarations: [
        GameScreenComponent,
        GameSelectorStubComponent,
        ModalStubComponent
      ],
      providers: [{provide: ModalService, useValue: modalSpy}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('afterViewInit', () => {
    it('should call modal open with right id', () => {
      expect(modalSpy.open).toHaveBeenCalledWith('game-selector');
    });
  });

  describe('newGame', () => {
    it('should call modal open with right id', () => {
      component.newGame();

      expect(modalSpy.open).toHaveBeenCalledTimes(2);
    });
  });
});
