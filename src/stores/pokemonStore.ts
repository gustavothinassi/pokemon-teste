import type { Pokemon } from '@/types/pokemon'
import { defineStore } from 'pinia'



type State = {
    pokemons: Pokemon[],
    searchPokemon: string,
    url: string,
}


export const usePokemonStore = defineStore('pokemon',{
    state: (): State => ({
        pokemons: [],
        searchPokemon: '',
        url: ''
      }),
    getters: {
        getUrlPokemonEvolution: (state)  => {
            return state.pokemons.forEach((element)=> {
                state.url = element.evolution_chain.url
            })
          }
    },
    actions:{
        setSearchPokemon(value: string) {
            this.searchPokemon = value
        },

        
        setDataPokemon(pokemon: Pokemon){
                this.pokemons = [...this.pokemons, pokemon]
                console.log(this.pokemons)
                this.getUrlPokemonEvolution
        }

    }
    }
)