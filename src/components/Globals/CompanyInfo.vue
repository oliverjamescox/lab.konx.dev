<!-- 

A component that outputs an object from global state, as it is being re-used I have added a function to determine what vuex data I want, i.e an example that uses state, or another that uses a getter. This is determined by passing a prop and the companyInformation function checking for it with an if statement.
Have left in but commented out the variables I would of used should it have been a single use component.

-->

<template>
  <div>
    <ul class="border border-b border-dashed py-2 px-4">
        <li class="my-2" v-for="item in companyInformation()" :key="item.id">
            <span class="font-bold pr-1">{{ item.name }}:</span> {{ item.value }}
        </li>
        <button class="btn" v-if="data.buttonState" v-on:click="mutationType()">Mutate Data</button>
    </ul>
  </div>
</template>
<script>

import { reactive } from 'vue' // also need to pass in computed to use the commented out variables
import { useStore } from 'vuex'

export default {
    name: 'CompanyInfo',

    props: {
        type: {
            type: String,
            default: "state",
            required: false,
        },
        button: {
            type: Boolean,
            default: false,
            required: false,
        }
    },

    setup(props) {
        const store = useStore()
        const data = reactive({
            buttonState: props.button,
        })

        // Standard Global vuex state call
        // const companyInformation = computed(() => store.state.companyInformation)

        // Standard Vuex Getter
        // const updatedCompanyInfo = computed(() => store.getters.companyInformation)
        

        // Standard Vuex Mutation
        // function addStringMutation() {
        //     console.log('mutation');
        //     store.commit('addStringMutation');
        // }

        // Standard Vuex Action
        // function addStringAction() {
        //     console.log('action');
        //     store.dispatch('addStringAction');
        // }

        // Component functionality to save on recreating the same component
        function companyInformation() {
            
            if (props.type === "state") {
                return store.state.companyInformation
            } else if (props.type === "getters") {
                return store.getters.companyInformation
            } else {
                return store.state.companyInformation
            }
        }

        function mutationType() {
            if (props.type === "mutation") {
                console.log('mutation');
                return store.commit('addStringMutation');
            } else {
                console.log('action');
                return store.dispatch('addStringAction');
            }
        }

        return {
            data,
            companyInformation,
            mutationType,
        }
  }
}
</script>
<style lang="scss" scoped>

</style>