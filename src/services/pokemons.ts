import type { AxiosInstance } from "axios";
/* import type { Pokemon } from '../types/pokemon' */
import type { PokemonSpecies } from '../types/pokemonSpecies'
import type { RequestError } from '../types/errors'
import type { Pokemon_ } from '../types/pokemon_'
import type { PokemonEvolution } from "@/types/pokemonEvolution";

type PokemonSpeciesType = {
    data: PokemonSpecies;
    errors: RequestError | null
}

type PokemonEvolutionType = {
    data: PokemonEvolution;
    errors: RequestError | null
}

type PokemonName = {
    name: string;
}

type Create = {
    data: Pokemon_;
    errors: RequestError | null
}

type CreatePayload = {
    type: string;
    text:string;
    fingerprint: string;
    device:string;
    page:string;
    apiKey:string;
}


export interface PokemonServiceInterface{
   /*  create(create: CreatePayload): Promise<Create>; */
    findPokemon(searchPokemon: string): Promise<Create>;
    getPokemonSpecies(id: string): Promise<PokemonSpeciesType>;
    getEvolutionChain(id: string): Promise<PokemonEvolutionType>;
}


function PokemonService(httpClient: AxiosInstance): PokemonServiceInterface{
    /* async function create(payload: CreatePayload): Promise<Create> {

        const response = await httpClient.post<PokemonSpecies>('/api/v2/pokemon-species', payload)

        let errors: RequestError | null = null

        if(!response.data){
            errors = {
                status: response.request.status,
                statusText: response.request.statusText
            }
        }
        
        return {
            data: response.data,
            errors
        }
    } */

    async function findPokemon(searchPokemon: string): Promise<Create> {
        const response = await httpClient.get<Pokemon_>(`/api/v2/pokemon/${searchPokemon}`);

        let errors: RequestError | null = null;

        if (!response.data) {
            errors = {
                status: response.request.status,
                statusText: response.request.statusText,
            };
        }

        return {
            data: response.data,
            errors,
        };
    }

   /* async function getPokemon(): Promise<Create> {
        const response = await httpClient.get<Pokemon>('/api/v2/pokemon/');

        let errors: RequestError | null = null;

        if (!response.data) {
            errors = {
                status: response.request.status,
                statusText: response.request.statusText,
            };
        }

        return {
            data: response.data,
            errors,
        };
    } */
 
    async function getPokemonSpecies(id: string): Promise<PokemonSpeciesType> {
        const response = await httpClient.get<PokemonSpecies>( `/api/v2/pokemon-species/${id}`);

        let errors: RequestError | null = null;

        if (!response.data) {
            errors = {
                status: response.request.status,
                statusText: response.request.statusText,
            };
        }

        return {
            data: response.data,
            errors,
        };
    }

   async function getEvolutionChain(id: string): Promise<PokemonEvolutionType> {
    const response = await httpClient.get<PokemonEvolution>( `/api/v2/evolution-chain/${id}`);

    let errors: RequestError | null = null;

    if (!response.data) {
        errors = {
            status: response.request.status,
            statusText: response.request.statusText,
        };
    }

    return {
        data: response.data,
        errors,
    };
  }
 



    return {
        findPokemon,
        getPokemonSpecies,
        getEvolutionChain
    }

}

export default PokemonService
