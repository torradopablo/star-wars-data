import { Controller, Get, Query } from '@nestjs/common';
import { StarShipService } from './starships.service';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { PointerStarShips } from './interfaces/pointer-starships.interface';
import { PointerStarShipsModel } from './models/pointer-starships.mode';

@ApiTags('starships')
@Controller('starships')
export class StarShipController {
  constructor(private starShipService: StarShipService) {}

  @Get()
  @ApiCreatedResponse({
    description: 'Get starships information',
    type: PointerStarShipsModel,
  })
  findAll(@Query() query: JSON): Promise<PointerStarShips> {
    return this.starShipService.findAll(query);
  }
}
