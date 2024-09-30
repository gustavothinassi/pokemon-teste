<template>
     <form @submit.prevent="">
        <div class="flex flex-row">
            <div class="border-2 flex items-center justify-center px-8 mr-3 rounded-full">
                <svg class="w-6 h-6 text-white" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
                <input type="text" v-model="state.searchPokemon " class="px-3 py-2 w-full font-base text-base bg-transparent text-white"
                    placeholder="Search...">
            </div>
            <button @click="submitPokemon" type="submit"
                class="inline-block px-8 py-2 bg-zinc-700 text-white font-base text-sm uppercase rounded-full">Search</button>
        </div>
        <span  class="text-bold text-red-700 text-sm"></span>

    </form>
   
</template>

<script lang="ts">
import services from '@/services';
import { usePokemonStore } from '@/stores/pokemonStore';
import { storeToRefs } from 'pinia';
import { defineComponent, reactive } from 'vue';


type State = {
    searchPokemon: string,
    isLoading: boolean,
    hasError: Error | null;
}

interface SetupReturn {
    state:State;
    submitPokemon(): Promise<void>;
}


export default defineComponent({
    setup (): SetupReturn{
        const pokemonStore = usePokemonStore()
        const { searchPokemon } =  storeToRefs(pokemonStore)
       
        const state = reactive<State>({
            searchPokemon: '',
            isLoading: false,
            hasError: null
        })

       function handleError(error: unknown) {
            if (error instanceof Error) {
                state.hasError = error;
                state.isLoading = false;
            }
        }

        async function submitPokemon (): Promise<void>{
            pokemonStore.setSearchPokemon(state.searchPokemon)
            state.isLoading = true
            
            try {
    
                const response = await services.pokemons.findPokemon(
                    searchPokemon.value
                )

                if(!response.errors){
                    console.log('okay')
                    pokemonStore.setDataPokemon(response.data)
                }

                state.isLoading = false;
            } catch (error) {
               handleError(error)
                
                
            }
        }

        return {
            state,
            submitPokemon
        }
    }
})
</script>