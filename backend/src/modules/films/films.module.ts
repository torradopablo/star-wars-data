import { Module } from '@nestjs/common';
import { FilmController } from './films.controller';
import { FilmService } from './films.service';

@Module({
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
