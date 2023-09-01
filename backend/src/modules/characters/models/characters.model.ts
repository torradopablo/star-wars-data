import { ApiProperty } from '@nestjs/swagger';
import { Character } from '../interfaces/characters.interface';

export class CharacterModel implements Character {
  @ApiProperty()
  name: string;

  @ApiProperty()
  height: string;

  @ApiProperty()
  mass: string;

  @ApiProperty()
  hair_color: string;

  @ApiProperty()
  skin_color: string;

  @ApiProperty()
  eye_color: string;

  @ApiProperty()
  birth_year: string;

  @ApiProperty()
  gender: string;

  @ApiProperty()
  homeworld: string;

  @ApiProperty()
  films: string[];

  @ApiProperty()
  species: string[];

  @ApiProperty()
  vehicles: string[];

  @ApiProperty()
  starships: string[];

  @ApiProperty()
  created: string;

  @ApiProperty()
  edited: string;

  @ApiProperty()
  url: string;
}
