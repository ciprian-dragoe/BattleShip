import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GameScreenComponent } from './game-screen.component';

@Component({selector: 'bat-game-map', template: ''})
class GameMapStubComponent {
  @Input() map: any;
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
        GameMapStubComponent
      ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
