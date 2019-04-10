import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSelectorComponent } from './game-selector.component';

@Component({selector: 'bat-modal', template: ''})
class ModalStubComponent {}

describe('GameSelectorComponent', () => {
  let component: GameSelectorComponent;
  let fixture: ComponentFixture<GameSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameSelectorComponent,
        ModalStubComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be create', () => {
    expect(component).toBeTruthy();
  });
});
