import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameScreenComponent } from './game-screen.component';

@Component({selector: 'bat-game-selector', template: ''})
class GameSelectorStubComponent {}

@Component({selector: 'bat-modal', template: ''})
class ModalStubComponent {}

describe('GameScreenComponent', () => {
  let component: GameScreenComponent;
  let fixture: ComponentFixture<GameScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameScreenComponent,
        GameSelectorStubComponent,
        ModalStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
});
