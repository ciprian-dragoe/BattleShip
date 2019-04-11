import { Ship } from '../models/Ship';

export interface Game {
  Map: number[][];
  Ships: Ship[];
}
