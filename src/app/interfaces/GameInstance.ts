import { Ship } from '../models/Ship';

export interface GameInstance {
  map: number[][];
  ships: Ship[];
  gameFinished: boolean;
}
