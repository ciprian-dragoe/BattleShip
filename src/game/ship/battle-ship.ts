import { Location } from '../map/map';
import { Ship } from './Ship';

export class BattleShip extends Ship {
  private static shipDesignOnMap: Location[] = [
    {xAxis: 0, yAxis: 0},
    {xAxis: 0, yAxis: 1},
    {xAxis: 0, yAxis: 2},
    {xAxis: 0, yAxis: 3},
    {xAxis: 0, yAxis: 4}
  ];

  constructor(shipId: number) {
    super(shipId, 5);
    this.setSchematic(BattleShip.shipDesignOnMap);
  }
}
