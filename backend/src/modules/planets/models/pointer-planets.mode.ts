import { ApiProperty } from '@nestjs/swagger';
import { PlanetModel } from './planets.model';
import { PointerPlanets } from '../interfaces/pointer-planets.interface';

export class PointerPlanetsModel implements PointerPlanets {
  @ApiProperty()
  count: number;

  @ApiProperty()
  next: string;

  @ApiProperty()
  previous: string;

  @ApiProperty({
    type: [PlanetModel],
  })
  results: PlanetModel[];
}
