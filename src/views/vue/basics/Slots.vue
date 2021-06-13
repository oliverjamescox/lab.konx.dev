<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Slots"
      bg-colour="green"
    />
    <div class="p-6 md:p-12 lg:py-12 lg:px-20">
      <div class="mb-8">
        <p class="my-2">
          The main ways data can be passed is down from parent to child as props, up from child to parent from emits or utilising a state management tool such as vuex where state is updated at a global level and then impacts all components that reference that particular state.
        </p>
        <h2 class="text-2xl text-black font-bold my-4">
          Props
        </h2>
        <p class="my-2">As many props can be added to a component as you wish, binding them with :propName will allow data to be dynamically added. Only importance is to make sure the prop name on the component is the same as what the child component is expecting to make sure it recieves the data. The example below is passing a simple string via a prop called 'dataProp'</p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    // parent component
    &lt;template&gt;
      &lt;div&gt;
        &lt;a-component :dataProp="data.parentData" /&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import { reactive } from 'vue'

    export default {

        setup() {
            const data = reactive({
                parentData: 'A String'
            })
            
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
        <p class="my-2">The child component declares props outside of the setup function in a object, it can declare certain requirements and validation, this example expects a matching prop and contained within that be a string, each time this component is used this prop must be provided each time.</p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    // child component
    &lt;template&gt;
      &lt;div&gt;
        { { dataProp } } // would render the string "A String"
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import { reactive } from 'vue'

    export default {

        props: {
            dataProp: {
                type: String,
                required: true
            },
        },

        setup() {
            const data = reactive({
                
            })
            
            return {
                data,
            }
        }
    }

    &lt;/script&gt;
                  </code>
                </pre>
        </div>
        <h2 class="text-2xl text-black font-bold my-4">
          Emits
        </h2>
        <p>
          Are used when you want to pass data back up to a parent, this is achieved by using $emit on the child component with a bound value which also corresponds to something on the parent component and when run triggers the parent. A simple example could be a navigation, you have a nested set of links, when you click you want the menu to close but the menu icon is controlled by the parent so you need to emit up and trigger a function on the parent.
        </p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    // child component
    &lt;template&gt;
      &lt;div&gt;
        &lt;button @click="fireEmit"&gt;trigger emit&lt;button&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    export default {
        emits: {
            'recieve-emit': null
        },
        setup(props, { emit }) {
            function fireEmit() {
                emit('recieve-emit');
            }

            return {
                fireEmit
            }
        }    
    }

    &lt;/script&gt;
                  </code>
                </pre>
        </div>
        <p class="my-2">
          Steps to successfully emit up to a parent component:
        </p>
        <ul>
            <li>1. Declare the emit and provide any validation (child)</li>
            <li>2. Add { emit } to the setup parameters (child)</li>
            <li>3. Call the emit, this example is done via button click (child)</li>
            <li>4. reference the emit, this example it is 'recieve-emit' within the parent component on the child add @recieve-emit=runFunction() or whatever you want it to do. (parent)</li>
        </ul>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    // parent component
    &lt;template&gt;
      &lt;div&gt;
        &lt;a-component @recieve-emit="runFunction()" /&gt;
      &lt;/div&gt;
    &lt;/template&gt;

    &lt;script&gt;
    import { reactive } from 'vue'

    export default {

        setup() {
            const data = reactive({})
            
            function runFunction() {
                alert('emit fired!');
            }

            return {
                data,
                'a-component' : aComponent
            }
        }
    }

    &lt;/script&gt;
                  </code>
                </pre>
        </div>
        <child-component @recieve-emit="runFunction()" />
        <p class="mt-8">
          I didn't have to actually use it but something called an event bus? (blog post?) I have favoured either props / emits between components or state management with vuex which has been covered here.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import PageHeading from '../../../components/Page/PageHeading.vue'
import ChildComponent from '../../../components/Basics/ChildComponent.vue'

export default {
  setup() {
    const data = reactive({
    })

    function runFunction() {
        alert('emit from child component fired.')
    }

    return {
      data,
      'page-heading' : PageHeading,
      'child-component' : ChildComponent,
      runFunction
    }
  }
}
</script>