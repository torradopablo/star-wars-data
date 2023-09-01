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

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(characterController.findAll()).toBe('Hello World!');
    });
  });
});
