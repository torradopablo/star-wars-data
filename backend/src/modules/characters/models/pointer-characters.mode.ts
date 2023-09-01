import { ApiProperty } from '@nestjs/swagger';
import { CharacterModel } from './characters.model';
import { PointerCharacters } from '../interfaces/pointer-characters.interface';

export class PointerCharactersModel implements PointerCharacters {
  @ApiProperty()
  count: number;

  @ApiProperty()
  next: string;

  @ApiProperty()
  previous: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  height: string;

  @ApiProperty()
  mass: string;

  @ApiProperty()
  hair_color: string;

  @ApiProperty()
  result: CharacterModel[];
}
