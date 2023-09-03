import { Controller, Get, Param, Query } from '@nestjs/common';
import { StarShipService } from './starships.service';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { PointerStarShips } from './interfaces/pointer-starships.interface';
import { PointerStarShipsModel } from './models/pointer-starships.mode';
import { StarShipModel } from './models/starships.model';
import { StarShip } from './interfaces/starships.interface';

@ApiTags('starships')
@Controller('starships')
export class StarShipController {
  constructor(private starShipService: StarShipService) {}

  @Get()
  @ApiCreatedResponse({
    description: 'Get starships information',
    type: PointerStarShipsModel,
  })
  @ApiQuery({ name: 'search', type: String, required: false })
  findAll(@Query() query: JSON): Promise<PointerStarShips> {
    return this.starShipService.findAll(query);
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'Get one starship information by id',
    type: StarShipModel,
  })
  @ApiParam({ name: 'id', description: 'ID of starship', type: Number })
  findOne(@Param() params: { id: number }): Promise<StarShip> {
    return this.starShipService.findOne(params.id);
  }

  @Get('/:id/details')
  @ApiCreatedResponse({
    description: 'Get one starship information by id with details',
    type: StarShipModel,
  })
  @ApiParam({ name: 'id', description: 'ID of starship', type: Number })
  findOneWithDetails(@Param() params: { id: number }): Promise<StarShip> {
    return this.starShipService.findOneWithDetails(params.id);
  }
}
