<!-- 

A component that outputs an object from global state, as it is being re-used I have added a function to determine what vuex data I want, i.e an example that uses state, or another that uses a getter. This is determined by passing a prop and the companyInformation function checking for it with an if statement.
Have left in but commented out the variables I would of used should it have been a single use component.

-->

<template>
  <div>
    <ul class="border border-b border-dashed py-2 px-4">
      <li
        class="my-2"
        v-for="item in companyInformation()"
        :key="item.id"
      >
        <span class="font-bold pr-1">{{ item.name }}:</span> {{ item.value }}
      </li>
      <button
        class="btn"
        v-if="data.buttonState"
        @click="mutationType()"
      >
        {{ data.mutationType === 'action' ? 'Action ' : 'Mutate ' }}Data
      </button>
      <div
        v-if="data.uniqueString"
        class="mt-8 mb-2"
      >
        <input
          class="border border-black p-2"
          v-model="data.message"
          placeholder="edit me"
        >
        <button
          class="border py-2 px-4 text-white bg-green border-green"
          :class="data.message.length > 0 ? 'pointer-events-auto' : 'pointer-events-none' "
          @click="mutationTypeCustom(data.message)"
        >
          Update
        </button>
      </div>
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
        },
        uniqueString: {
            type: Boolean,
            default: false,
            required: false,
        }
    },

    setup(props) {
        const store = useStore()
        const data = reactive({
            buttonState: props.button,
            mutationType: props.type,
            message: '',
            uniqueString: props.uniqueString,
        })

        // Standard Global vuex state call
        // const companyInformation = computed(() => store.state.companyInformation)

        // Standard Vuex Getter
        // const updatedCompanyInfo = computed(() => store.getters.companyInformation)
        

        // Standard Vuex Mutation
        // function addStringMutation() {
        //     store.commit('addStringMutation');
        // }

        // Standard Vuex Action
        // function addStringAction() {
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
                console.log('vuex mutation used')
                return store.commit('addStringMutation');
            } else {
                console.log('vuex action used')
                return store.dispatch('addStringAction');
            }
        }

        function mutationTypeCustom(string) {
            if (props.type === "mutation") {
                console.log('vuex custom mutation used')
                return store.commit('addStringUniqueMutation', string)
            } else {
                console.log('vuex custom action used')
                return store.dispatch('addStringUniqueAction', string);
            }
        }

        return {
            data,
            companyInformation,
            mutationType,
            mutationTypeCustom,
        }
  }
}
</script>
<style lang="scss" scoped>

</style>