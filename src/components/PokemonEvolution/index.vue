<template>
    <div class="flex justify-center p-0 w-full">
        <component
        :is="state.component.searchImput"
        />
   </div>
            
   <div class="flex flex-col items-center mb-8">
        <component
        :is="state.component.searchCard"
        />
   </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import CardImputPokemonEvolutionCustom from './CardImputPokemonEvolutionCustom.vue';
import ImputPokemonEvolutionCustom from './ImputPokemonEvolutionCustom.vue';


interface SetupReturn {
  state: State;

}
type State = {
  component: {
    searchImput: string,
    searchCard: string
  }
}


export default defineComponent({
   components: {CardImputPokemonEvolutionCustom, ImputPokemonEvolutionCustom},
   setup(): SetupReturn {
        const state = reactive({
            component: {
                searchImput: 'ImputPokemonEvolutionCustom',
                searchCard: 'CardImputPokemonEvolutionCustom'
            }
        })
        return {
            state
        }
   }
})

</script>