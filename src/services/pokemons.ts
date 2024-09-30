import type { AxiosInstance } from "axios";
import type { Pokemon } from '../types/pokemon'
import type { RequestError } from '../types/errors'




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
    getPokemon(url:string): Promise<Create>;
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

    async function getPokemon(url: string): Promise<Create> {
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





    return {
        create,
        findPokemon,
        getPokemon
    }

}

export default PokemonService
