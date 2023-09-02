import { Module } from '@nestjs/common';
import { CharacterModule } from './modules/characters/characters.module';
import { FilmModule } from './modules/films/films.module';
import { StarShipModule } from './modules/starships/starships.module';
import { PlanetModule } from './modules/planets/planets.module';

@Module({
  imports: [CharacterModule, FilmModule, StarShipModule, PlanetModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
