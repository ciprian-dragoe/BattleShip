import { Ship } from './Ship';
import { Location } from '../map/map';

export class Destroyer extends Ship {
  private static schematic: Location[] = [
    {xAxis: 0, yAxis: 0},
    {xAxis: 0, yAxis: 1},
    {xAxis: 0, yAxis: 2},
    {xAxis: 0, yAxis: 3},
  ];

  constructor(id: number) {
    super(id, 4);
    this.setSchematic(Destroyer.schematic);
  }
}
