<template>
  <div class="text-grey leading-relaxed">
    <h1 class="font-bold text-3xl mb-4 text-black">
      Vuex
    </h1>
    <!-- Overview -->
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Overview
      </h2>
      <p class="mb-4">
        Library for vue to handle state management, state being the data we use in the project with vuex being globally accessible to all components and preventing the need for passing state up / down components via props or events.
      </p>
      <p>
        Mostly useful for larger projects and those with a lot of shared data, vuex creates a centralised store that can be accessed by all components, known as a single source of truth. This store can be accessed and updated, affecting all existing references application wide.
      </p>
    </div>
    <!-- Setting up a Vuex store -->
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Setting up a Vuex store
      </h2>
      <ul class="list-disc pl-6">
        <li>Create a folder called <strong>store</strong> within the src folder and create a file titled index.js.</li>
        <li>In the newly create file import the required files i.e <strong>import Vue from 'vue'</strong> and <strong>import Vuex from 'vuex'</strong> or just <strong>import { createStore } from 'vuex'</strong> in vue 3 apps.</li>
        <li>Initiate vuex with the line <strong>Vue.use(Vuex)</strong> or chain to the createApp. (1)</li>
        <li>Declare a new store as per the documentation to vue 2 or 3.</li>
        <li>With the store now declared the components can access this central store without having to be passed as props from the parent component.</li>
      </ul>
      <div>
        <pre v-highlightjs>
            <code class="javascript">
    createApp(App) // 1.
        .use(store)
        .use(router)
        .mount('#app')
            </code>
        </pre>
      </div>
      <div>
        <pre v-highlightjs>
            <code class="javascript">
    // vue 3 example
    import { createStore } from 'vuex'

    export default createStore({
      state: {
        companyInfo: [
          { name: 'Forename', value: 'Oliver'},
          { name: 'Surname', value: 'James'},
          { name: 'Telephone', value: '0712 345 543'},
          { name: 'Email', value: 'user@vuex.com'},
        ]
      }
    })
            </code>
        </pre>
      </div>
    </div>
    <!-- Using Computed properties on components -->
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Using Computed properties on components
      </h2>
      <p>
        To make the store globally available, the store has to be imported to the app.js as seen below, the computed property will reach out and get the data from the store.
      </p>
      <div>
        <pre v-highlightjs>
                <code class="javascript">
    // example app.js file in a vue 2 project
    import Vue from 'vue'
    import App from './App.vue'

    import { store } from './store/store'

    new Vue({
        store: store,
        el: '#app',
        render: h => h(App)
    })

    // example app.js file in a vue 3 project
    import { createApp } from 'vue'
    import App from './App.vue'
    import store from './store'

    createApp(App)
        .use(store)
        .mount('#app')
                </code>
              </pre>
      </div>
      <div>
        <pre v-highlightjs>
                <code class="javascript">
    // example component file

    // template
    &lt;div :key="item.id" v-for="item in companyInformation">
        &lt;div&gt;item.name - item.value&lt;/div&gt;
    &lt;/div&gt;

    // script (vue 2)
    export default {
        computed: {
            companyInformation() {
                // $store can be used because vuex is installed and available
                return this.$store.state.companyInformation 
            }
        }
    }

    // script (vue 3)
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    export default {
        name: 'CompanyInfo',

        setup() {
            const store = useStore()
            const companyInformation = computed(() => store.state.companyInformation)
            return {
                companyInformation
            }
        }
    }
                </code>
              </pre>
      </div>
      <p class="mb-4">A component utilising a vuex store for the companyInformation object outputting the data made available globally by vuex.</p>
      <company-info></company-info>
    </div>
    <!-- Getters -->
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Getters
      </h2>
      <p class="mb-4">
        Can be considered as computed properties for the store, re-usable blocks of functionality that can be used site wide, i.e a discount function, apply % to all rather than each component having the code written each time.
      </p>
      <p>
        To use the getter, add a computed property to the component and update the variable in the v-for loop to use the new data source, the below example takes an existing object, maps over it and on each item adds asterix's to the value.
      </p>
      <div>
        <pre v-highlightjs>
            <code class="javascript">
    // code added to store const (after state)
    getters: {
        companyInformation: state => {
            let companyInformation = state.companyInformation.map( item => {
                return {
                    name: item.name,
                    value: '**' + item.value + '**'
                }
            });
            return companyInformation
        }
    }

    // template
    &lt;div :key="item.id" v-for="item in updatedCompanyInformation">
        &lt;div&gt;item.name - item.value&lt;/div&gt;
    &lt;/div&gt;

    // script (vue 3, vue 2 example used in a previous section)
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    export default {
        name: 'CompanyInfo',
        setup() {
            const store = useStore()
            const companyInformation = computed(() => store.getters.companyInformation)
            return {
                companyInformation
            }
        }
    }
            </code>
        </pre>
      </div>
      <p class="mb-4">The original state object exists as it did and hasn't been changed or mutated, the getter has taken the available data and performed a function, in this example for something visual just adding some asterix's.</p>
      <company-info type="getters"></company-info>
    </div>
    <!-- Mutations -->
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Mutations
      </h2>
      <p>
        Simply put, to change (mutate) the original data on the store, the below example will take companyInformation and add a string after the name.
      </p>
      <p>
        To use or 'commit a mutation' add a function to the component and call it with <strong>store.commit</strong>, adding a button with a click event to run the function. This has mutated our inital state and scrolling back up you can see all other instances have also been updated.
      </p>
      <div>
        <pre v-highlightjs>
                <code class="javascript">
    // code added to store const (after getters)
    mutations: {
      addStringMutation: state => {

        state.companyInformation.forEach( item => {
          item.value = item.value + ' -- a string'
        })
      }
    },

    // template
    &lt;div :key="item.id" v-for="item in companyInformation">
            &lt;div&gt;item.name - item.value&lt;/div&gt;
            &lt;button v-on:click="addStringMutation"&gt;Add String&lt;/button&gt;
        &lt;/div&gt;

    // script (vue 3, vue 2 example used in a previous section)
    import { computed } from 'vue'
    import { useStore } from 'vuex'

    export default {
        name: 'CompanyInfo',

        setup() {
            const store = useStore()
            const companyInformation = computed(() => store.state.companyInformation)

            function addStringMutation() {
                store.commit('addStringMutation');
            }

            return {
                companyInformation,
                addStringMutation,
            }
        }
    }
                </code>
              </pre>
              <company-info type="mutation" :button="data.true"></company-info>
      </div>
    </div>
    <!-- Actions -->
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Actions
      </h2>
      <p class="mb-4">
        When looking to mutate store data using actions over mutations is generally preferred and considered good practice. Especially helpful with debugging unexpected state changes. In the vuex store the action now contains the <strong>context.commit</strong> (previously on the component) and the component now has a <strong>store.dispatch</strong>.
      </p>
      <h3 class="text-xl text-black font-bold my-2">
        Context &amp; Dispatch
      </h3>
      <p><span class="tbc">tbc</span></p>
      <div>
        <pre v-highlightjs>
                <code class="javascript">
    actions: {
      addStringAction: context => {
        context.commit('addStringMutation')
      }
    },

    // template
    &lt;div :key="item.id" v-for="item in companyInformation">
            &lt;div&gt;item.name - item.value&lt;/div&gt;
            &lt;button v-on:click="addStringAction"&gt;Add String&lt;/button&gt;
        &lt;/div&gt;

    // script
    export default {
        name: 'CompanyInfo',

        setup() {
            const store = useStore()
            const companyInformation = computed(() => store.state.companyInformation)

            function addStringAction() {
                store.dispatch('addStringAction');
            }

            return {
                companyInformation,
                addStringAction,
            }
        }
    }
                </code>
              </pre>
      </div>
      <company-info type="action" :button="data.true"></company-info>
    </div>
    <!-- Passing Parameters to actions or mutations -->
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Passing Parameters to actions or mutations
      </h2>
      <p class="mb-4">This example outlines the steps to add to an action, the component itself has both seperate functions showcasing mutations / actions for reference.</p>
      <ol class="list-decimal pl-6">
        <li>Alter the addString method on the template to accept a parameter referencing some user specified data on the component.</li>
        <li>Update the component method to accept the parameter.</li>
        <li>To pass that to the action, append as below. The first being the action name, the second the data we want to send.</li>
        <li>Add parenthisis to the action arrow function and add payload there and along with the commit.</li>
        <li>Lastly update the mutation itself to accept the payload.</li>
      </ol>
      <div>
        <pre v-highlightjs>
                <code class="javascript">
    // template
    &lt;div :key="item.id" v-for="item in companyInformation">
        &lt;div&gt;item.name - item.value&lt;/div&gt;
        &lt;button v-on:click="addString(data.message)"&gt;Add String&lt;/button&gt; // 1.
    &lt;/div&gt;

    // script
    import { reactive } from 'vue'
    import { useStore } from 'vuex'

    export default {
        name: 'CompanyInfo',

        setup() {
            const store = useStore()
            const data = reactive({
                message: '',
            })
            const companyInformation = computed(() => store.state.companyInformation)

            function addString(string) {
                store.dispatch('addStringAction', string);
            }

            return {
                companyInformation,
                addString,
            }
        }
    }

    // updating the store to accept the new parameter
    actions: {
        // payload refers to the data that has been sent to it, in this case 'string'
        addString: (context, payload) => { // 4.
            context.commit('addString', payload) // 4.
        }
    }

    mutations: {
        addString: (state, payload) => { // 5.
            state.companyInformation.forEach( item => {
                item.name + payload; // 5.
            })
        }
    }
                </code>
              </pre>
              <company-info :uniqueString="data.true" type="action" :button="data.true"></company-info>
      </div>
      <h3 class="text-xl text-black font-bold mt-4 mb-2">
        Why payload?
      </h3>
      <p><span class="tbc">tbc</span></p>
    </div>
    <!-- Mapping Actions &amp; Getters -->
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Mapping Actions &amp; Getters
      </h2>
      <p class="mb-4">
        A component calling multiple getters and actions could result in big blocks of code on each component, mapping prevents that. Utilises ES6 spread operator as shown below with before / after code blocks. To get this to work the code has to be transpiled with babel. "stage-2" preset needs to be added via npm.
      </p>
      <div>
        <pre v-highlightjs>
                <code class="javascript">
    // template
    &lt;div :key="item.id" v-for="item in companyInformation">
        &lt;div&gt;item.name - item.value&lt;/div&gt;
        &lt;button v-on:click="addString"&gt;Add String&lt;/button&gt;
    &lt;/div&gt;

    // script
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {

        // Before
        computed: {
            companyInformation() {
                return this.$store.state.companyInformation
            }
        },

        // After
        computed: {
            ...mapGetters([
                'companyInformation'
            ])
        },

        // Before
        methods: {
            addString: function(string) {
                this.$store.dispatch('addString', string);
            }
        },

        // After
        methods: {
            ...mapActions([
                'addString'
            ])
        }
    }
                </code>
              </pre>
      </div>
    </div>
    <!-- Modules -->
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Modules
      </h2>
      <p class="mb-4">
        <span class="tbc">tbc</span>
      </p>
      <div>
        <pre v-highlightjs>
                <code class="javascript">
    // code here
                </code>
              </pre>
      </div>
    </div>
    <!-- Strict Mode -->
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Strict Mode
      </h2>
      <p class="mb-4">
        Add <strong>Strict: true</strong> to a vue store will prevent store data being changed directly and throw a console error, the preferred way is to utilise mutations to alter the store data, this allows for greater debugging with the vue devtools tracking state.
      </p>
      <div>
        <pre v-highlightjs>
                <code class="javascript">
    methods: {
        addString: function() {
            // Using this function directly changes the store, if strict mode was enabled this would cause console errors
            this.$store.state.companyInformation.forEach( item => {
                item.name + ' -- a string';
            })
            // Preferred method - use a mutator
            this.$store.commit('addString');
        }
    }
                </code>
              </pre>
      </div>
    </div>
    <!-- Vuex needed? Vue 3 Context API -->
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Vuex needed? Vue 3 Context API
      </h2>
      <p class="mb-4">
        <span class="tbc">tbc</span>
      </p>
      <div>
        <pre v-highlightjs>
                <code class="javascript">
    // code here
                </code>
              </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import CompanyInfo from '../../../components/Globals/CompanyInfo.vue'

export default {
  
  setup() {
    const data = reactive({
      true: true,
      false: false,
    })

    return {
      data,
    }
  },
    components: { 
      'company-info' : CompanyInfo 
    },
}

</script>

<style lang="scss">

</style>