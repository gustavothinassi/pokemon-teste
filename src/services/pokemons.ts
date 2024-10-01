import type { AxiosInstance } from "axios";
import type { Pokemon } from '../types/pokemon'
import type { PokemonSpecies } from '../types/pokemonEvolution'
import type { RequestError } from '../types/errors'

type PokemonSpecies = {
    data: PokemonSpecies;
    errors: RequestError | null
}


type Create = {
    data: Pokemon;
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
    create(create: CreatePayload): Promise<Create>;
    findPokemon(searchPokemon: string): Promise<Create>;
    getPokemon(): Promise<Create>;
    getPokemonSpecies(id: number): Promise<PokemonSpecies>;
}


function PokemonService(httpClient: AxiosInstance): PokemonServiceInterface{
    async function create(payload: CreatePayload): Promise<Create> {

        const response = await httpClient.post<Pokemon>('/api/v2/pokemon-species', payload)

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
    }

    async function findPokemon(searchPokemon: string): Promise<Create> {
        const response = await httpClient.get<Pokemon>(`/api/v2/pokemon-species/${searchPokemon}`);

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

    async function getPokemon(): Promise<Create> {
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
    }

    async function getPokemonSpecies(id: number): Promise<PokemonSpecies> {
        const response = await httpClient.get<PokemonSpecies>( `/pokemon-species/${id}`);

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
        create,
        findPokemon,
        getPokemon,
        getPokemonSpecies
    }

}

export default PokemonService
