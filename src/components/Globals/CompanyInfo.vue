<!-- 

A component that outputs an object from global state, as it is being re-used I have added a function to determine what vuex data I want, i.e an example that uses state, or another that uses a getter. This is determined by passing a prop and the companyInformation function checking for it with an if statement.
Have left in but commented out the variables I would of used should it have been a single use component.

-->

<template>
  <div>
    <ul class="border border-b py-2 px-4">
        <li class="my-2" v-for="item in companyInformation()" :key="item.id">
            <span class="font-bold pr-1">{{ item.name }}:</span> {{ item.value }}
        </li>
    </ul>
  </div>
</template>
<script>

import { reactive } from 'vue' // also need to pass in computed to use the commented out variables
import { useStore } from 'vuex'

export default {
    name: 'CompanyInfo',

    props: {
        type: String
    },

    setup(props) {
        const store = useStore()
        // const companyInformation = computed(() => store.state.companyInformation)
        // const updatedCompanyInfo = computed(() => store.getters.companyInformation)
        const data = reactive({
            forcedType: null
        })

        function companyInformation() {
            
            if (props.type === "state") {
                return store.state.companyInformation
            } else if (props.type === "getters") {
                return store.getters.companyInformation
            }
        }

        return {
            data,
            companyInformation
        }
  }
}
</script>
<style lang="scss" scoped>

</style>