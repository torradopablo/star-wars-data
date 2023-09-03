import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import axios from 'axios';
import { PointerStarShips } from './interfaces/pointer-starships.interface';
import { stringify } from 'querystring';
import { PointerStarShipsModel } from './models/pointer-starships.mode';
import Endpoints from '../../config/endpoints.config';
import { StarShip } from './interfaces/starships.interface';
import { StarShipModel } from './models/starships.model';

@Injectable()
export class StarShipService {
  async findAll(query: JSON): Promise<PointerStarShips> {
    try {
      const baseURL = `${Endpoints.apiSw}/starships/`;
      const queryParams = stringify(Object(query));
      const urlWithQuery = `${baseURL}?${queryParams}`;
      const { data } = await axios.get(urlWithQuery);
      const myData = plainToClass(PointerStarShipsModel, data);
      await validate(myData, { skipMissingProperties: true });
      return data;
    } catch (error) {
      throw error;
    }
  }
  async findOne(id: number): Promise<StarShip> {
    try {
      const baseURL = `${Endpoints.apiSw}/starships/${id}`;
      const urlWithQuery = `${baseURL}`;
      const { data } = await axios.get(urlWithQuery);
      const myData = plainToClass(StarShipModel, data);
      await validate(myData, { skipMissingProperties: true });
      return data;
    } catch (error) {
      throw error;
    }
  }
  async findOneWithDetails(id: number): Promise<StarShip> {
    try {
      const baseURL = `${Endpoints.apiSw}/starships/${id}`;
      const urlWithQuery = `${baseURL}`;
      const { data } = await axios.get(urlWithQuery);
      const myData = plainToClass(StarShipModel, data);
      await validate(myData, { skipMissingProperties: true });
      for (const key in myData) {
        if (Array.isArray(myData[key])) {
          const urls = myData[key];
          const resAxiosArray = (
            await Promise.all(urls.map((url) => axios.get(url)))
          ).map((el) => el.data);
          if (key === 'films') {
            myData[key] = resAxiosArray.map((objeto) => objeto['title']);
          } else {
            myData[key] = resAxiosArray.map((objeto) => objeto['name']);
          }
        }
      }
      return myData;
    } catch (error) {
      throw error;
    }
  }
}
