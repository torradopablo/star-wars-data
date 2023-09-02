import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import axios from 'axios';
import { PointerStarShips } from './interfaces/pointer-starships.interface';
import { stringify } from 'querystring';
import { PointerStarShipsModel } from './models/pointer-starships.mode';
import Endpoints from '../../config/endpoints.config';

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
}
