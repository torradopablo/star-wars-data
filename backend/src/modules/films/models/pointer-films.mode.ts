import { ApiProperty } from '@nestjs/swagger';
import { FilmModel } from './films.model';
import { PointerFilms } from '../interfaces/pointer-films.interface';

export class PointerFilmsModel implements PointerFilms {
  @ApiProperty()
  count: number;

  @ApiProperty()
  next: string;

  @ApiProperty()
  previous: string;

  @ApiProperty({
    type: [FilmModel],
  })
  results: FilmModel[];
}
