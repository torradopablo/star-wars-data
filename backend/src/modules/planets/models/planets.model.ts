import { ApiProperty } from '@nestjs/swagger';
import { Planet } from '../interfaces/planets.interface';

export class PlanetModel implements Planet {
  @ApiProperty()
  name: string;

  @ApiProperty()
  rotation_period: string;

  @ApiProperty()
  orbital_period: string;

  @ApiProperty()
  diameter: string;

  @ApiProperty()
  climate: string;

  @ApiProperty()
  gravity: string;

  @ApiProperty()
  terrain: string;

  @ApiProperty()
  surface_water: string;

  @ApiProperty()
  population: string;

  @ApiProperty()
  residents: string[];

  @ApiProperty()
  films: string[];

  @ApiProperty()
  created: string;

  @ApiProperty()
  edited: string;

  @ApiProperty()
  url: string;
}
