<template>
    <div class="flex flex-row items-center">
        <div class="w-1/2 h-24 relative p-5 border border-grey-lighter">
            <transition name="fade" appear>
                <div v-if="data.toggleTransition" class="flex h-full text-xl justify-center items-center">Hello.</div>
            </transition>
        </div>
        <div class="w-auto">
            <div class="bg-green py-2 ml-4 cursor-pointer rounded hover:bg-green-lighter text-white font-bold px-4" @click="toggleTransitionExample()">Toggle</div>
        </div>
    </div>
</template>
<script>
import { reactive } from 'vue'

export default {
    setup() {
        const data = reactive({
            toggleTransition: false
        })

        function toggleTransitionExample() {
            return data.toggleTransition = !data.toggleTransition
          }

        return {
            data,
            toggleTransitionExample
        }
    }
}
</script>
<style>
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
        transform: translateY(-20px)
    }

    /* .fade-enter-to, .fade-leave-from {
        opacity: 1;
        transform: translateY(0)
    } */

    .fade-enter-active, .fade-leave-active {
        transition: all 1s ease;
    }

@keyframes wobble {
    
    /* Starting Point */
    0% {
        transform: translateY(-60px);
        opacity: 0;
    }

    /* Mid point but transform and opacity have completed */
    50% {
        transform: translateY(0);
        opacity: 1;
    }

    /* Faux wobble by changing the x-axis every 10% but reducing the distance until 0 */
    60% { transform: translateX(10px); }
    70% { transform: translateX(-10px); }
    80% { transform: translateX(5px); }
    90% { transform: translateX(-5px); }
    100% { transform: translateX(0); }
}

</style>