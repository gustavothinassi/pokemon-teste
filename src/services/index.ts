import axios from "axios";
import PokemonService from './pokemons'

const API_ENVS = {
    production: '',
    development: '',
    local: 'https://pokeapi.co'
}

const httpClient = axios.create({
    baseURL: API_ENVS.local
})

httpClient.interceptors.response.use((response) => {
    return response
  }, (error) => {
    const conThrowAnError = error.request.status === 0 ||
      error.request.status === 500
  
    if (conThrowAnError) {
      throw new Error(error.message)
    }

    return error
  })
  
  export default{
    pokemons: PokemonService(httpClient) 
  }