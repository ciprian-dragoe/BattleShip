import { Component, Input, OnInit } from '@angular/core';
import { MapLegend } from '../../../../game/map/map-legend';

@Component({
  selector: 'bat-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.css']
})
export class GameCellComponent implements OnInit {
  @Input() value: number;
  private legend = MapLegend;
  constructor() {
  }

  ngOnInit() {
  }
}
