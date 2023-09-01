import { Controller, Get, Query } from '@nestjs/common';
import { CharacterService } from './characters.service';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import { PointerCharacters } from './interfaces/pointer-characters.interface';
import { PointerCharactersModel } from './models/pointer-characters.mode';

@ApiTags('characters')
@Controller('characters')
export class CharacterController {
  constructor(private characterService: CharacterService) {}

  @Get()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: PointerCharactersModel,
  })
  findAll(@Query() query): Promise<PointerCharacters> {
    return this.characterService.findAll(query);
  }
}
