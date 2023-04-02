/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { PokemonResponse } from './interfaces/poke-response-interface';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class SeedService {
  private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
  ) {}

  async executeSeed() {

    await this.pokemonModel.deleteMany({});

    const { data } = await this.axios.get<PokemonResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=10',
    );

    // const insertPromisesArray = [];
    const pokemonToInsert: {name: string, no: number}[] = [];

    data.results.forEach(async({ name, url }) => {
      const segments = url.split('/');
      const no = +segments[segments.length - 2];
      
      // inserta uno a uno
      //await this.pokemonModel.create({name, no});

      // inserta la promesa en un array
      /* insertPromisesArray.push(
        this.pokemonModel.create({name, no})
      ); */

      // forma optima: vamnos insertrando datos al array
      pokemonToInsert.push({ name, no });
    });

    // ejecuta el array de promesas
    // await Promise.all(insertPromisesArray);
    // insertamos el dato uno a uno
    await this.pokemonModel.insertMany(pokemonToInsert);


    const pokemons = await this.pokemonModel.find();

    return {
      response: 'Seed execute',
      pokemons
    };
  }
}
