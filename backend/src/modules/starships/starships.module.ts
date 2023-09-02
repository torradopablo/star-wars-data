import { Module } from '@nestjs/common';
import { StarShipController } from './starships.controller';
import { StarShipService } from './starships.service';

@Module({
  controllers: [StarShipController],
  providers: [StarShipService],
})
export class StarShipModule {}
