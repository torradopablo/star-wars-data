import { Test, TestingModule } from '@nestjs/testing';
import { CharacterController } from './characters.controller';
import { CharacterService } from './characters.service';

describe('AppController', () => {
  let characterController: CharacterController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CharacterController],
      providers: [CharacterService],
    }).compile();

    characterController = app.get<CharacterController>(CharacterController);
  });

  describe('getLuckBySearch', () => {
    it('should return Luke Skywalker', async () => {
      const lukeName: string = 'Luke Skywalker';
      const query: { search: string } = { search: 'luke' };
      const data = await characterController.findAll(Object(query));
      expect(data.results[0].name).toBe(lukeName);
    });
  });

  describe('getLuckById', () => {
    it('should return Luke Skywalker', async () => {
      const lukeName: string = 'Luke Skywalker';
      const params: { id: number } = { id: 1 };
      const data = await characterController.findOne(Object(params));
      expect(data.name).toBe(lukeName);
    });
  });
});
