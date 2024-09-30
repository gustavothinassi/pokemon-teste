import { defineStore } from 'pinia'

type Pokemon = {
    base_happiness:number,
    capture_rate: number
  }

type State = {
    pokemons: Pokemon[],
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
        setDataPokemon(pokemon: Object){
            this.pokemons.push(pokemon)
        },
    }
    }
)