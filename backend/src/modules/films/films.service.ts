import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import axios from 'axios';
import { PointerFilms } from './interfaces/pointer-films.interface';
import { stringify } from 'querystring';
import { PointerFilmsModel } from './models/pointer-films.mode';
import { Film } from './interfaces/films.interface';
import { FilmModel } from './models/films.model';
import Endpoints from '../../config/endpoints.config';

@Injectable()
export class FilmService {
  async findAll(query: JSON): Promise<PointerFilms> {
    try {
      const baseURL = `${Endpoints.apiSw}/films/`;
      const queryParams = stringify(Object(query));
      const urlWithQuery = `${baseURL}?${queryParams}`;
      const { data } = await axios.get(urlWithQuery);
      const myData = plainToClass(PointerFilmsModel, data);
      await validate(myData, { skipMissingProperties: true });
      return data;
    } catch (error) {
      throw error;
    }
  }
  async findOne(id: number): Promise<Film> {
    try {
      const baseURL = `${Endpoints.apiSw}/films/${id}`;
      const urlWithQuery = `${baseURL}`;
      const { data } = await axios.get(urlWithQuery);
      const myData = plainToClass(FilmModel, data);
      await validate(myData, { skipMissingProperties: true });
      return data;
    } catch (error) {
      throw error;
    }
  }
  async findOneWithDetails(id: number): Promise<Film> {
    try {
      const baseURL = `${Endpoints.apiSw}/films/${id}`;
      const urlWithQuery = `${baseURL}`;
      const { data } = await axios.get(urlWithQuery);
      const myData = plainToClass(FilmModel, data);
      await validate(myData, { skipMissingProperties: true });

      for (const key in myData) {
        if (Array.isArray(myData[key])) {
          const urls = myData[key];
          const resAxiosArray = (
            await Promise.all(urls.map((url) => axios.get(url)))
          ).map((el) => el.data);
          myData[key] = resAxiosArray.map((objeto) => objeto['name']);
        }
      }
      return myData;
    } catch (error) {
      throw error;
    }
  }
}
