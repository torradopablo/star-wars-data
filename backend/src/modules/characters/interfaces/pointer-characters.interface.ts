import { Character } from './characters.interface';
import { Pointer } from '../../../common/interfaces/pointers.interface';

export interface PointerCharacters extends Pointer {
  results: Character[];
}
