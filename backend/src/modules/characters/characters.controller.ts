import { Controller, Get, Query } from '@nestjs/common';
import { CharacterService } from './characters.service';
import { ApiTags } from '@nestjs/swagger';
import { PointerCharacters } from './interfaces/pointer-characters.interface';

@ApiTags('characters')
@Controller('characters')
export class CharacterController {
  constructor(private characterService: CharacterService) {}

  @Get()
  findAll(@Query() query): Promise<PointerCharacters> {
    return this.characterService.findAll(query);
  }
}
