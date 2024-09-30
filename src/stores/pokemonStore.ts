import type { Pokemon } from '@/types/pokemon'
import { defineStore } from 'pinia'



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

        
        setDataPokemon(pokemon: Pokemon){
                this.pokemons = [...this.pokemons, pokemon]
                console.log(this.pokemons)
        },

    }
    }
)