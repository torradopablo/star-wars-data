import { Module } from '@nestjs/common';
import { CharacterController } from './characters.controller';
import { CharacterService } from './characters.service';

@Module({
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
