<template>
    <div v-if="state.showAlert">
        <div data-testid="alert">
            <div data-testid="close" @click="closeAlert" style="width:100px">&times;</div>
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, defineComponent } from "vue";

type State = {
    showAlert: boolean;
}


interface SetupReturn {
    closeAlert(): void;
    state: State;
}

export default defineComponent({
        setup(): SetupReturn{
            const state = reactive({
                showAlert: true
            })

            function closeAlert (): void {
                state.showAlert = !state.showAlert
                console.log('funcao', state.showAlert)
            }

            console.log(state.showAlert)

            return {
                state,
                closeAlert
            }
       }
    })
</script>