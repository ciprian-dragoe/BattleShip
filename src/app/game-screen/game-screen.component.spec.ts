import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScreenComponent } from './game-screen.component';

describe('GameScreenComponent', () => {
  let component: GameScreenComponent;
  let fixture: ComponentFixture<GameScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameScreenComponent,
        GameSelectorStub,
        SimpleModalStub
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

@Component({selector: 'game-selector', template: ''})
class GameSelectorStub {}

@Component({selector: 'simple-modal', template: ''})
class SimpleModalStub {}
