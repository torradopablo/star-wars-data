import { Controller, Get, Param, Query } from '@nestjs/common';
import { FilmService } from './films.service';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
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
  findAll(@Query() query: JSON): Promise<PointerFilms> {
    return this.filmService.findAll(query);
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'Get one film information by id',
    type: FilmModel,
  })
  findOne(@Param() params: { id: number }): Promise<Film> {
    return this.filmService.findOne(params.id);
  }
}
