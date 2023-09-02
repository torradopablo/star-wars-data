import { Test, TestingModule } from '@nestjs/testing';
import { StarShipController } from './starships.controller';
import { StarShipService } from './starships.service';

describe('AppController', () => {
  let starShipController: StarShipController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StarShipController],
      providers: [StarShipService],
    }).compile();

    starShipController = app.get<StarShipController>(StarShipController);
  });

  describe('getStarShiplBySearch', () => {
    it('should return CR90 corvette', async () => {
      const starShipName: string = 'CR90 corvette';
      const query: { search: string } = { search: 'CR90 corvette' };
      const data = await starShipController.findAll(Object(query));
      expect(data.results[0].name).toBe(starShipName);
    });
  });
});
