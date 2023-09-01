import { Controller, Get } from '@nestjs/common';
import { CharacterService } from './characters.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('characters')
@Controller('characters')
export class CharacterController {
  constructor(private characterService: CharacterService) {}

  @Get()
  findAll(): string {
    console.log(this.characterService.findAll());
    return 'Hello World!';
  }
}
