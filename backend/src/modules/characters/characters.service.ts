import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import axios from 'axios';
import { PointerCharacters } from './interfaces/pointer-characters.interface';
import { stringify } from 'querystring';
import { PointerCharactersModel } from './models/pointer-characters.mode';
import { Character } from './interfaces/characters.interface';
import { CharacterModel } from './models/characters.model';
import Endpoints from '../../config/endpoints.config';

@Injectable()
export class CharacterService {
  async findAll(query: JSON): Promise<PointerCharacters> {
    try {
      const baseURL = `${Endpoints.apiSw}/people/`;
      const queryParams = stringify(Object(query));
      const urlWithQuery = `${baseURL}?${queryParams}`;
      const { data } = await axios.get(urlWithQuery);
      const myData = plainToClass(PointerCharactersModel, data);
      await validate(myData, { skipMissingProperties: true });
      return data;
    } catch (error) {
      throw error;
    }
  }
  async findOne(id: number): Promise<Character> {
    try {
      const baseURL = `${Endpoints.apiSw}/people/${id}`;
      const urlWithQuery = `${baseURL}`;
      const { data } = await axios.get(urlWithQuery);
      const myData = plainToClass(CharacterModel, data);
      await validate(myData, { skipMissingProperties: true });
      return data;
    } catch (error) {
      throw error;
    }
  }
}
