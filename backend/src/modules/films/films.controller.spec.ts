import { Test, TestingModule } from '@nestjs/testing';
import { FilmController } from './films.controller';
import { FilmService } from './films.service';

describe('AppController', () => {
  let filmController: FilmController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FilmController],
      providers: [FilmService],
    }).compile();

    filmController = app.get<FilmController>(FilmController);
  });

  describe('getFilmlBySearch', () => {
    it('should return A New Hope', async () => {
      const filmName: string = 'A New Hope';
      const query: { search: string } = { search: 'A New Hope' };
      const data = await filmController.findAll(Object(query));
      expect(data.results[0].title).toBe(filmName);
    });
  });

  describe('getFilmById', () => {
    it('should return A New Hope', async () => {
      const filmName: string = 'A New Hope';
      const params: { id: number } = { id: 1 };
      const data = await filmController.findOne(Object(params));
      expect(data.title).toBe(filmName);
    });
  });
});
