import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '../../../game/map/map';

@Component({
  selector: 'bat-game-map',
  templateUrl: './game-map.component.html',
  styleUrls: ['./game-map.component.css']
})
export class GameMapComponent implements OnInit {
  @Input() map: number[][];
  @Output() attack = new EventEmitter<Location>();
  constructor() {
  }

  ngOnInit() {
  }

  attackLocation(x: number, y: number) {
    this.attack.emit({xAxis: x, yAxis: y});
  }}
