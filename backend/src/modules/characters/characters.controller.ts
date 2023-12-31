import { Controller, Get, Param, Query } from '@nestjs/common';
import { CharacterService } from './characters.service';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { PointerCharacters } from './interfaces/pointer-characters.interface';
import { PointerCharactersModel } from './models/pointer-characters.mode';
import { Character } from './interfaces/characters.interface';
import { CharacterModel } from './models/characters.model';

@ApiTags('characters')
@Controller('characters')
export class CharacterController {
  constructor(private characterService: CharacterService) {}

  @Get()
  @ApiCreatedResponse({
    description: 'Get characters information',
    type: PointerCharactersModel,
  })
  @ApiQuery({ name: 'search', type: String, required: false })
  findAll(@Query() query: JSON): Promise<PointerCharacters> {
    return this.characterService.findAll(query);
  }

  @Get(':id')
  @ApiCreatedResponse({
    description: 'Get one character information by id',
    type: CharacterModel,
  })
  @ApiParam({ name: 'id', description: 'ID of character', type: Number })
  findOne(@Param() params: { id: number }): Promise<Character> {
    return this.characterService.findOne(params.id);
  }

  @Get('/:id/details')
  @ApiCreatedResponse({
    description: 'Get one character information by id with details',
    type: CharacterModel,
  })
  @ApiParam({ name: 'id', description: 'ID of character', type: Number })
  findOneWithDetails(@Param() params: { id: number }): Promise<Character> {
    return this.characterService.findOneWithDetails(params.id);
  }
}
