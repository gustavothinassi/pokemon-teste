<template>
  <div class="relative">
      <div class="main">
          <div class="main-item-left z-0">
              <div class="flex justify-center p-8">
                  <h1 class="text-center text-4xl font-light text-white">Pokedex</h1>
              </div>
              <div class="flex justify-center p-0 w-full">
                  <component
                  :is="state.component.imput"
                  />
              </div>
             
              <div class="flex flex-col items-center mb-8">
                    <component
                    :is="state.component.card"
                    />
                    </div>
          </div>

          <div class="main-item-right">
              <div class="flex items-end justify-end space-x-4 p-8">
                  <button class="w-9 h-9 bg-slate-500 rounded-full text-sm text-white font-base"
                      >
                      Cor
                  </button>
              </div>
        
              <RouterView />
          </div>
      </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ImputPokemonCustom from './components/ImputPokemonCustom.vue';
import { RouterView } from 'vue-router';
import CardImputCustom from './components/CardImputCustom.vue';


interface SetupReturn {
  state: State;

}
type State = {
  component: {
    card: string,
    imput: string
  };
}


export default defineComponent({
  components: {ImputPokemonCustom, RouterView, CardImputCustom},
      setup(): SetupReturn{
          const state = reactive({
              component: {
                card: 'CardImputCustom', 
                imput: 'ImputPokemonCustom'
            }
          })

          return {
              state
          }
     }
  })
</script>













import { RouterLink, RouterView } from 'vue-router'
<RouterView />