<template>
<div class="flex flex-col p-8">
                  <h2 class="mt-10 text-2xl font-bold text-white">Pokemon</h2>
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
</template>

<script lang="ts">
import FooterCustom from '@/components/FooterCustom.vue';
import { defineComponent } from 'vue';


export default defineComponent({
    components: {FooterCustom},
    setup(){}
})
</script>


