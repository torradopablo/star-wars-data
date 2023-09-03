import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import axios from 'axios';
import { PointerPlanets } from './interfaces/pointer-planets.interface';
import { stringify } from 'querystring';
import { PointerPlanetsModel } from './models/pointer-planets.mode';
import { Planet } from './interfaces/planets.interface';
import { PlanetModel } from './models/planets.model';
import Endpoints from '../../config/endpoints.config';

@Injectable()
export class PlanetService {
  async findAll(query: JSON): Promise<PointerPlanets> {
    try {
      const baseURL = `${Endpoints.apiSw}/planets/`;
      const queryParams = stringify(Object(query));
      const urlWithQuery = `${baseURL}?${queryParams}`;
      const { data } = await axios.get(urlWithQuery);
      const myData = plainToClass(PointerPlanetsModel, data);
      await validate(myData, { skipMissingProperties: true });
      return data;
    } catch (error) {
      throw error;
    }
  }
  async findOne(id: number): Promise<Planet> {
    try {
      const baseURL = `${Endpoints.apiSw}/planets/${id}`;
      const urlWithQuery = `${baseURL}`;
      const { data } = await axios.get(urlWithQuery);
      const myData = plainToClass(PlanetModel, data);
      await validate(myData, { skipMissingProperties: true });
      return data;
    } catch (error) {
      throw error;
    }
  }
  async findOneWithDetails(id: number): Promise<Planet> {
    try {
      const baseURL = `${Endpoints.apiSw}/planets/${id}`;
      const urlWithQuery = `${baseURL}`;
      const { data } = await axios.get(urlWithQuery);
      const myData = plainToClass(PlanetModel, data);
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
