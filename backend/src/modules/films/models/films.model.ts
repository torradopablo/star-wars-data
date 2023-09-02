import { ApiProperty } from '@nestjs/swagger';
import { Film } from '../interfaces/films.interface';

export class FilmModel implements Film {
  @ApiProperty()
  title: string;

  @ApiProperty()
  episode_id: number;

  @ApiProperty()
  opening_crawl: string;

  @ApiProperty()
  director: string;

  @ApiProperty()
  producer: string;

  @ApiProperty()
  release_date: string;

  @ApiProperty()
  characters: string[];

  @ApiProperty()
  planets: string[];

  @ApiProperty()
  starships: string[];

  @ApiProperty()
  vehicles: string[];

  @ApiProperty()
  species: string[];

  @ApiProperty()
  created: string;

  @ApiProperty()
  edited: string;

  @ApiProperty()
  url: string;
}
