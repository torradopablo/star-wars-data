import { ApiProperty } from '@nestjs/swagger';
import { StarShipModel } from './starships.model';
import { PointerStarShips } from '../interfaces/pointer-starships.interface';

export class PointerStarShipsModel implements PointerStarShips {
  @ApiProperty()
  count: number;

  @ApiProperty()
  next: string;

  @ApiProperty()
  previous: string;

  @ApiProperty({
    type: [StarShipModel],
  })
  results: StarShipModel[];
}
