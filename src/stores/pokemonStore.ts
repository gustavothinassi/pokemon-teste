/* import type { Pokemon } from '@/types/pokemon' */
import type { PokemonSpecies } from '@/types/pokemonSpecies'
import { defineStore } from 'pinia'
import type { Pokemon_ } from '@/types/pokemon_'
import type { PokemonEvolution } from '@/types/pokemonEvolution'
import { extractEvolutionNumber } from '@/utils'



type State = {
    pokemons: Pokemon_[],
    searchPokemon: string,
    pokemon_id: string,
    pokemon_species: PokemonSpecies[],
    pokemon_evolution: PokemonEvolution[],
    url: string,
}


export const usePokemonStore = defineStore('pokemon',{
    state: (): State => ({
        pokemons: [],
        pokemon_species: [],
        pokemon_evolution: [],
        searchPokemon: '',
        url: '',
        pokemon_id: ''
      }),
    getters: {
        getUrlPokemonEvolution: (state)  => {
            return state.pokemons.forEach((element)=> { 
                    state.pokemon_id =  (element.id).toString()
            })
        },
        getPokemonSpecies: (state) => {
            return state.pokemon_species.forEach((element)=> { 
                state.url = extractEvolutionNumber(element.evolution_chain.url)
            })
        }
        
    },
    actions:{
        setSearchPokemon(value: string) {
            this.searchPokemon = value
        },

        
        setDataPokemon(pokemon: Pokemon_){
                this.pokemons = [...this.pokemons, pokemon]
                this.getUrlPokemonEvolution
        },

        setPokemonSpecies(pokemonSpecies: PokemonSpecies) {
                this.pokemon_species = [...this.pokemon_species, pokemonSpecies]
                this.getPokemonSpecies
                console.log("pkm id", this.url)
        },

        setPokemonEvolution(pokemonEvolution: PokemonEvolution) {
            this.pokemon_evolution = [...this.pokemon_evolution, pokemonEvolution]
            console.log("pkm evol", this.pokemon_evolution)
        }

    }
    }
)