import { Film } from './films.interface';
import { Pointer } from '../../../common/interfaces/pointers.interface';

export interface PointerFilms extends Pointer {
  results: Film[];
}
