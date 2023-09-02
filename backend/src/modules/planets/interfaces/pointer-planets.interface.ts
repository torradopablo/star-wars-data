import { Planet } from './planets.interface';
import { Pointer } from '../../../common/interfaces/pointers.interface';

export interface PointerPlanets extends Pointer {
  results: Planet[];
}
