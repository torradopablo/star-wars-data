import { Module } from '@nestjs/common';
import { CharacterModule } from './modules/characters/characters.module';
import { FilmModule } from './modules/films/films.module';

@Module({
  imports: [CharacterModule, FilmModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
