<template>

<!-- <div  class="h-[700px] overflow-y-visible w-full p-0 max-w-lg mt-2">
    <ul class="flex flex-col text-base mt-4" :key="`image-${item.name}`" v-for="item in dataSet" >
        <li class="group cursor-pointer w-full h-[64px] flex flex-row px-3 items-center text-white hover:border-[1px]  duration-100  border-1">
                <div class="m-0"><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" alt="Tania Andrew" class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" /></div>
                <span class="ml-4"></span>
                <div class="ml-72"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                    class="group-hover:inline-block hidden w-[24px] h-[24px]" height="1em" width="1em"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                </svg></div>
            </li>
    </ul>
    </div> --> 
    <component v-bind="$props" :is="item"/>
</template>

<script lang="ts">
import {  defineComponent,  } from "vue";



export default defineComponent({
        item: {
            type: Object,
            requered: true,
        },

        setup(){
           
        }
      
    })
</script>