import { Injectable } from '@nestjs/common';
import { Character } from './characters.interface';

@Injectable()
export class CharacterService {
  private readonly characters: Character[] = [];

  create(character: Character) {
    this.characters.push(character);
  }

  findAll(): Character[] {
    return this.characters;
  }
}
