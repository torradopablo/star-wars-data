import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PointerCharacters } from './interfaces/pointer-characters.interface';

@Injectable()
export class CharacterService {
  async findAll(): Promise<PointerCharacters[]> {
    try{
      //console.log((await axios.get('https://swapi.dev/api/people/?search=32')).data)
      const { data } = await axios.get('https://swapi.dev/api/people/');
      return data;
    } catch (error) {
      throw (error);
    }
    
  };

}
