<template>
  <div class="relative">
      <div class="main">
          <div class="main-item-left z-0">
              <div class="flex justify-center p-8">
                  <h1 class="text-center text-4xl font-light text-white">Pokedex</h1>
              </div>
              <div class="flex justify-center p-0">
                  <component
                  :is="state.component"
                  />
              </div>
             
              <div>
                  <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias dolorum amet eligendi tempore accusantium nisi, repellendus quibusdam! Ad dolore harum culpa atque, pariatur doloremque ipsa rem, accusamus suscipit error consequuntur?</div>
              </div>
          </div>

          <div class="main-item-right">
              <div class="flex items-end justify-end space-x-4 p-8">
                  <button class="w-9 h-9 bg-brand-main rounded-full text-xl text-white font-base"
                      >
                      Cor
                  </button>
              </div>
             <!--  <div class="flex flex-col p-8">
                  
                  <div
                      
                      class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-16 lg:gab-8 md:gap-6 sm:gap-12 mt-0">
                      <div>teste aqui</div>
                  </div>
              </div>
              <div class="mt-4 flex flex-col m-8">
                  <h2 class="mt-10 text-2xl font-bold text-white">Today's Hightlights</h2>
                  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-10 mt-10">
                      <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea facere, aliquam voluptatem impedit pariatur eveniet expedita dignissimos dolorem, itaque adipisci accusantium vel nobis alias in aspernatur maiores, autem animi neque?</div>
                  </div>
                  <div class="text-center font-base text-brand-graydark mt-7" style="font-size: 1.1rem;">created by
                      <a href="https://portifolio-gustavo.vercel.app" class="underline ">Gustavo Thinassi</a> -
                      devChallenges.io
                  </div>
              </div> -->
              <RouterView />
          </div>
      </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue';
import ImputPokemonCustom from './components/ImputPokemonCustom.vue';
import { RouterView } from 'vue-router';


interface SetupReturn {
  state: State;

}
type State = {
  component: string;
}


export default defineComponent({
  components: {ImputPokemonCustom, RouterView},
      setup(): SetupReturn{
          const state = reactive({
              component: 'ImputPokemonCustom'
          })

          return {
              state
          }
     }
  })
</script>













import { RouterLink, RouterView } from 'vue-router'
<RouterView />