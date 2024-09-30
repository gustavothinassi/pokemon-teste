import { defineStore } from 'pinia'




/* type Pokemon = {
    base_happiness: number;
  capture_rate: number;
  color: { name: string; url: string };
  egg_groups: Array<{ name: string; url: string }>;
  evolution_chain: { url: string };
  } */

type State = {
    pokemons: object[],
    searchPokemon: string
}

export const usePokemonStore = defineStore('pokemon',{
    state: (): State => ({
        pokemons: [],
        searchPokemon: ''
      }),
    getters: {},
    actions:{
        setSearchPokemon(value: string) {
            this.searchPokemon = value
        },
        setDataPokemon(pokemon: object[]){
                this.pokemons = [...this.pokemons, pokemon]
                console.log(this.pokemons[0])
            
        },
    }
    }
)