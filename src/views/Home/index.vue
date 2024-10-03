<template>
    <div class="relative">
      <div class="main">
          <div class="main-item-left z-0">
              <div class="flex justify-center p-8">
                  <h1 class="text-center text-4xl font-light text-white">Teste</h1>
              </div>
              <div class="flex justify-center p-0 w-full">
                <component
                :is="state.component.searchImput"
                />
             </div>
            
            <div class="flex flex-col items-center mb-8" v-if="pokemonEvolution">
                <div  class="h-[700px] overflow-y-visible w-full p-0 max-w-lg mt-2">
                   <CardImputPokemonCustom 
                   v-for="item in pokemonEvolution"
                   :key="item"
                   item="{{item}}"
                    />
                <div>
                    {{ pokemonEvolution }}
                   </div>
                </div>
            </div>
          </div>

          <div class="main-item-right">
              <div class="flex items-end justify-end space-x-4 p-8">
                  <button class="w-9 h-9 bg-slate-500 rounded-full text-sm text-white font-base"
                      >
                      Cor
                  </button>
              </div>
        
              <div class="flex flex-col p-8">
                  <h2 class="mt-10 text-2xl font-bold text-white">teste</h2>
                  <div   
                      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-16 lg:gab-8 md:gap-6 sm:gap-12 mt-0">
                     
                  </div>
              </div>
              <div class="mt-4 flex flex-col m-8">
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 mt-10">
                      <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea facere, aliquam voluptatem impedit pariatur eveniet expedita dignissimos dolorem, itaque adipisci accusantium vel nobis alias in aspernatur maiores, autem animi neque?</div>
                  </div>
                  <footer-custom />
                 
              </div>
          </div>
      </div>
  </div>
</template>


<script lang="ts">
import FooterCustom from '@/components/Footer/FooterCustom.vue';
import CardImputPokemonCustom from '@/components/CardImputPokemonCustom.vue';
import ImputPokemonCustom from '@/views/Home/components/ImputPokemonCustom.vue';
import { usePokemonStore } from '@/stores/pokemonStore';
import { storeToRefs } from 'pinia';
import { computed, defineComponent,reactive, watch, type ComputedRef } from 'vue';
import services from '@/services';


interface SetupReturn {
  state: State;
  pokemonId: ComputedRef<string>;
  pokemonEvolution: ComputedRef<object>;

}
type State = {
  component: {
    searchImput: string,
    searchCard: string,
    footer: string
  },
  isLoading: boolean;
}


export default defineComponent({
   components: {CardImputPokemonCustom, ImputPokemonCustom, FooterCustom},
   setup(): SetupReturn {
        const pokemonStore = usePokemonStore()
        const { pokemon_id, url, pokemon_evolution } =  storeToRefs(pokemonStore)

        const pokemonId = computed<string>(()=> pokemon_id.value);
        const pokemonEvolutionUrl = computed<string>(()=> url.value);
        const pokemonEvolution =  computed<object>(()=> pokemon_evolution);
       
        const state = reactive({
            component: {
                searchImput: 'ImputPokemonCustom',
                searchCard: 'CardImputPokemonCustom',
                footer: 'Footer'
            },
            isLoading: false,
            pokemonEvolution: []
        })

        watch(pokemonId, (newValue) => {
            if (newValue) {
                submitPokemonSpecies(newValue)
            }
        })

        async function submitPokemonSpecies (id: string): Promise<void>{
            state.isLoading = true
            
            try {
    
               const response = await services.pokemons.getPokemonSpecies(id)

                if(!response.errors){
                    console.log('okay2')
        
                    pokemonStore.setPokemonSpecies(response.data);
                    if(pokemonEvolutionUrl.value){
                        submitPokemonEvolution(pokemonEvolutionUrl.value)
                    }
                }

                state.isLoading = false;
            } catch (error) {
              /*  handleError(error) */

            }
        }

        async function submitPokemonEvolution(id: string): Promise<void> {       
            try {
    
               const response = await services.pokemons.getEvolutionChain(id)

                if(!response.errors){
                    console.log('okay2')
        
                    pokemonStore.setPokemonEvolution(response.data);
                   
                  
                }

                state.isLoading = false;
            } catch (error) {
              /*  handleError(error) */
                
                
            }
        }

      
        return {
            state,
            pokemonId,
            pokemonEvolution
        }
   }
})

</script>
