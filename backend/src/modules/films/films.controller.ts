import { Controller, Get, Param, Query } from '@nestjs/common';
import { FilmService } from './films.service';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { PointerFilms } from './interfaces/pointer-films.interface';
import { PointerFilmsModel } from './models/pointer-films.mode';
import { Film } from './interfaces/films.interface';
import { FilmModel } from './models/films.model';

@ApiTags('films')
@Controller('films')
export class FilmController {
  constructor(private filmService: FilmService) {}

  @Get()
  @ApiCreatedResponse({
    description: 'Get films information',
    type: PointerFilmsModel,
  })
  @ApiQuery({ name: 'search', type: String, required: false })
  findAll(@Query() query: JSON): Promise<PointerFilms> {
    return this.filmService.findAll(query);
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'Get one film information by id',
    type: FilmModel,
  })
  @ApiParam({ name: 'id', description: 'ID of film', type: Number })
  findOne(@Param() params: { id: number }): Promise<Film> {
    return this.filmService.findOne(params.id);
  }

  @Get('/:id/details')
  @ApiCreatedResponse({
    description: 'Get one film information by id with details',
    type: FilmModel,
  })
  @ApiParam({ name: 'id', description: 'ID of film', type: Number })
  findOneWithDetails(@Param() params: { id: number }): Promise<Film> {
    return this.filmService.findOneWithDetails(params.id);
  }
}
