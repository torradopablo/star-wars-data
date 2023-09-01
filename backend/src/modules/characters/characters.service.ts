import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import axios from 'axios';
import { PointerCharacters } from './interfaces/pointer-characters.interface';
import { stringify } from 'querystring';
import { PointerCharactersModel } from './models/pointer-characters.mode';

@Injectable()
export class CharacterService {
  async findAll(query: JSON): Promise<PointerCharacters> {
    try {
      const baseURL = 'https://swapi.dev/api/people/';
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
}
