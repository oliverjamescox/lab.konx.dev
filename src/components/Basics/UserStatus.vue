<template>
    <button class="border border-black py-2 px-8" @click="userToggle($event)">
        <span class="ml-4 relative" :class="!data.userState ? 'panel__message' : 'panel__message--active' " >
            user is {{ data.userMessage }}
        </span>
    </button>
</template>
<script>

import { reactive } from 'vue'

export default {
    name: 'user-status',

    setup() {
        const data = reactive({
            userMessage: 'offline',
            userState: false,
        })

        function userToggle(event) {
            data.userState = !data.userState;

            // has access to the element event object, uncomment to see what it contains
            console.log(event);

            // if statement example
            // if (data.userState) {
            //     data.userMessage = 'online'
            // } else {
            //     data.userMessage = 'offline'
            // }

            // ternary example
            data.userState ? data.userMessage = 'online' : data.userMessage = 'offline'
        }

        return {
            data,
            userToggle,
        }
  }
}
</script>
<style lang="scss" scoped>

.panel {
    &__message {

        &:before {
            content: '';
            position: absolute;
            top: 2px;
            left: -30px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: $red;
        }
        
        &--active {
            &:before {
                content: '';
                position: absolute;
                top: 2px;
                left: -30px;
                width: 15px;
                height: 15px;
                border-radius: 50%;
                background: $green;
            }
        }
    }
}

</style>