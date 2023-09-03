import { Controller, Get, Param, Query } from '@nestjs/common';
import { PlanetService } from './planets.service';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
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
  @ApiQuery({ name: 'search', type: String, required: false })
  findAll(@Query() query: JSON): Promise<PointerPlanets> {
    return this.planetService.findAll(query);
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'Get one planet information by id',
    type: PlanetModel,
  })
  @ApiParam({ name: 'id', description: 'ID of planet', type: Number })
  findOne(@Param() params: { id: number }): Promise<Planet> {
    return this.planetService.findOne(params.id);
  }

  @Get('/:id/details')
  @ApiCreatedResponse({
    description: 'Get one planet information by id with details',
    type: PlanetModel,
  })
  @ApiParam({ name: 'id', description: 'ID of planet', type: Number })
  findOneWithDetails(@Param() params: { id: number }): Promise<Planet> {
    return this.planetService.findOneWithDetails(params.id);
  }
}
