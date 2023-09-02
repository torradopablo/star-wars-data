import { Module } from '@nestjs/common';
import { CharacterModule } from './modules/characters/characters.module';
import { FilmModule } from './modules/films/films.module';
import { StarShipModule } from './modules/starships/starships.module';

@Module({
  imports: [CharacterModule, FilmModule, StarShipModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
