import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PointerCharacters } from './interfaces/pointer-characters.interface';
const queryString = require('querystring');


@Injectable()
export class CharacterService {
  async findAll(query:JSON): Promise<PointerCharacters> {
    try{
      const baseURL = 'https://swapi.dev/api/people/';
      const queryParams = queryString.stringify(query);
      const urlWithQuery = `${baseURL}?${queryParams}`;
      const { data } = await axios.get(urlWithQuery);
      return data;
    } catch (error) {
      throw (error);
    }
    
  };

}
