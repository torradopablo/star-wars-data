import { StarShip } from './starships.interface';
import { Pointer } from '../../../common/interfaces/pointers.interface';

export interface PointerStarShips extends Pointer {
  results: StarShip[];
}
