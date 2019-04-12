import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameMapComponent } from './game-map.component';

@Component({selector: 'bat-game-cell', template: ''})
class GameCellComponent {
  @Input() value: any;
}

describe('GameMapComponent', () => {
  let component: GameMapComponent;
  let fixture: ComponentFixture<GameMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameMapComponent,
        GameCellComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
