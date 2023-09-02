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
    description: 'Get characters information',
    type: PointerCharactersModel,
  })
  findAll(@Query() query: JSON): Promise<PointerCharacters> {
    return this.characterService.findAll(query);
  }
}
