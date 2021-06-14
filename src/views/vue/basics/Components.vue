<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Components"
      bg-colour="green"
    />
    <div class="p-6 md:p-12 lg:py-12 lg:px-20">
      <div class="mb-8">
        <p><strong>**** this syntax is for the new composition api as part of vue 3 ****</strong></p>
        <h3 class="text-xl text-black font-bold my-4">Structure</h3>
        <p class="my-2">Made up of 3 key blocks, the first is the template, this will contain everything viewable on the frontend, in vue 2 a parent div is required but in vue 3 this is no longer required. Secondly the script block, contains all of the logic for the component, methods, computed properties, data etc. In vue 2 the options API is the defacto choice. In vue 3 it's switched to the composition api which I am using on this project. Lastly the style block, used to contain specific styles for the block (so called CSS in JS). You can use webpack etc to add loaders to allow for support of scss global variables, also scope the styles to only this component easily by adding scope to the tag preventing styling conflicts.</p>
        <h3 class="text-xl text-black font-bold my-4">Template section</h3>
        <p class="my-2">Everything to be viewable on the frontend is contained within the template tags.</p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    // template block

    &lt;template&gt;
      &lt;div&gt;
        &lt;a-component /&gt;
        &lt;div v-if="data.modalOpen"&gt;
         conditional content here
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/template&gt;
                  </code>
                </pre>
        </div>
        <h3 class="text-xl text-black font-bold my-4">Script section</h3>
        <p class="my-2">The script block can become expansive, trying to keep components lightweight and instead nest additional ones to improve readability and lessening technical debt.</p>
        <h4 class="text-lg text-black font-bold my-4">Requirements</h4>
        <ul>
          <li>1. add imports, i.e components or vue features the component will need (reactive,refs,computed etc)</li>
          <li>2. wrap a export default around everything other than the imports.</li>
          <li>3. Create a setup function and declare default component data states if required.</li>
          <li>4. Follow the syntax for functions &amp; computed properties</li>
          <li>- return everything, i.e data, components &amp; functions.</li>
        </ul>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    // script block

    &lt;script&gt;
      // [1] imports here
      import { reactive } from 'vue'
      import aComponent from './components/aComponent.vue'

      // [2]
      export default {

        // [3]
        setup() {
          const data = reactive({
            modalOpen: false,
            count: 10,
          })


          // [4] functions declared like this
          function trackClickEvent(event) {
            console.log(event);
          }

          // [4] computed properties as this
          countDoubled: computed(() => data.count * 2)

          // [5]
          return {
            data,
            aComponent
            'a-component' : aComponent
          }
        }
      }

    &lt;/script&gt;
                  </code>
                </pre>
        </div>
        <p class="my-2">This is the basic implementation of the composition API, will expand with specific example that make better use of lifecycle methods.</p>
      </div>
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold mb-4">
          Style block
        </h2>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    &lt;style lang="scss" scoped&gt;

    .class-name {
      background: yellow;
      &__child {
        border: orange 1px solid;
        &--active {
          color: red;
        }
      }
    }

    &lt;/style&gt;
                  </code>
                </pre>
        </div>
        <p>
          Utilising a vue loader you are able to access global scss on components by adding the lang="scss". If you also want to make sure the styling doesn't cause specificity issues or side effects you can add scoped and vue will automatically add a data attribute unique to that component.
        </p>
      </div>
      <div>
        <user-basic-search />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import PageHeading from '../../../components/Page/PageHeading.vue'
import UserBasicSearch from '../../../components/Basics/UserBasicSearch.vue'



export default {
  components: { UserBasicSearch },
  setup() {
    const data = reactive({
    })

    return {
      data,
      'page-heading' : PageHeading,
      'user-basic-search' : UserBasicSearch
    }
  }
}
</script>