import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlanetService } from './planets.service';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { PointerPlanets } from './interfaces/pointer-planets.interface';
import { PointerPlanetsModel } from './models/pointer-planets.mode';
import { Planet } from './interfaces/planets.interface';
import { PlanetModel } from './models/planets.model';

@ApiTags('planets')
@Controller('planets')
export class PlanetController {
  constructor(private planetService: PlanetService) {}

  @Get()
  @ApiCreatedResponse({
    description: 'Get planets information',
    type: PointerPlanetsModel,
  })
  findAll(@Query() query: JSON): Promise<PointerPlanets> {
    return this.planetService.findAll(query);
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'Get one planet information by id',
    type: PlanetModel,
  })
  findOne(@Param() params: { id: number }): Promise<Planet> {
    return this.planetService.findOne(params.id);
  }
}
