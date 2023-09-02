import { Module } from '@nestjs/common';
import { PlanetController } from './planets.controller';
import { PlanetService } from './planets.service';

@Module({
  controllers: [PlanetController],
  providers: [PlanetService],
})
export class PlanetModule {}
