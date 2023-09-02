import { Test, TestingModule } from '@nestjs/testing';
import { PlanetController } from './planets.controller';
import { PlanetService } from './planets.service';

describe('AppController', () => {
  let planetController: PlanetController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PlanetController],
      providers: [PlanetService],
    }).compile();

    planetController = app.get<PlanetController>(PlanetController);
  });

  describe('getPlanetBySearch', () => {
    it('should return Tatooine', async () => {
      const planetName: string = 'Tatooine';
      const query: { search: string } = { search: 'Tatooine' };
      const data = await planetController.findAll(Object(query));
      expect(data.results[0].name).toBe(planetName);
    });
  });

  describe('getPlanetById', () => {
    it('should return Tatooine', async () => {
      const planetName: string = 'Tatooine';
      const params: { id: number } = { id: 1 };
      const data = await planetController.findOne(Object(params));
      expect(data.name).toBe(planetName);
    });
  });
});
