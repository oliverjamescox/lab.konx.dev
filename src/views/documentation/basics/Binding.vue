<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Binding"
      bg-colour="green"
    />
    <div class="p-6 md:p-12 lg:py-12 lg:px-20">
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold mb-4">
          Two-way Data Binding
        </h2>
        <p>
          Easiest way to describe is an example. Say you wish to capture data from a input field or form a v-model is added to an input, this will capture whatever the user enters, this can be stored in a variable which in turn is referenced elsewhere in the app and automatically updates it. 
        </p>
        <div class="my-4">
          <div class="flex flex-row items-center">
            <div>
              <label>Enter a word:</label>
              <input class="mx-4 p-2 border border-black" type="text" v-model="data.enteredWord" />
            </div>
            <div>
              <div>enteredWord stored data = {{ data.enteredWord }}</div>
            </div>
          </div>
          <div class="my-4">
            <p>This is an example sentence that references the above variable with the word completely changing the context. By default the v-model will update on each keypress, appending .lazy will only update the v-model when focus is lost</p>
            <p class="my-4 text-lg italic">"The robot peered out from the porthole, as his eyes adjusted to the bright light all he could see were rows and rows of <strong>{{ data.enteredWord }}</strong>".</p>
          </div>
        </div>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    input type="text" v-model="enteredWord"

    input type="text" v-model.lazy="enteredWord"
                  </code>
          </pre>
        </div>    
      </div>
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold mb-4">
          Refs
        </h2>
        <p class="my-2">
          Work in a similar way to v-model, also something I have yet to have to reach for after using vue in production for coming up to 2 years. This section requires more practical examples.
        </p>
        <p>Using refs:</p>
        <ul>
          <li>- Attach a ref to a element i.e ref="root"</li>
          <li>- Create it in the setup like you would data()</li>
          <li>- To access the ref add to a watchEffect and append .value to the console.log</li>
          <li>- flush: 'post' is also required</li>
        </ul>
        <div class="my-4">
          <div class="flex flex-row items-center"> 
            <div ref="root">This is a root element watched by ref</div>
          </div>
        </div>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    // template
    ref="root"

    // script
    const root = ref(null)

    watchEffect(() => {
      console.log(root.value)
    }, 
    {
      flush: 'post'
    })
                  </code>
                </pre>
        </div>  
      </div>
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold mb-4">
          Class Binding
        </h2>
        <p>
          We can pass an object to :class (short for v-bind:class) to dynamically toggle classes. You can have multiple classes toggled by having more fields in the object. In addition, the :class directive can also co-exist with the plain class attribute. The below code example is inline.
        </p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    :class="{ 'active' : isActive }"

    :class="{ 'active' : isActive, 'green' : isGreen }" // inline example
                  </code>
                </pre>
        </div>
        <p class="mb-4">
          The above syntax means if the data property of isActive evaluates to true the class active will be added to the element.
        </p>
        <p>If there are multiple classes rather than inlining they can be passed as a object or an array. The classObject is on the div of the codeblock and the classArray is on the pre. Inspect with devtools to see the result.</p>
        <div :class="data.classObject">
          <pre
            :class="data.classArray"
            v-highlightjs
          >
                  <code class="javascript">
    const data = reactive({

      // renders as: class="class-object another-class-object"
      classObject: {
        'class-object': true,
        'another-class-object': true,
      },

      // renders as: class="class-one class-two class-three"
      classArray: ['class-one class-two class-three'],
    })

    :class="data.classObject" // element example
                  </code>
                </pre>
        </div>
        <h3 class="font-bold text-xl mb-2">
          Ternary Conditional
        </h3>
        <p>The above example renders a class or doesn't, using a ternary provides an additional usecase to have a class depending on the condition being either true or false.</p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    :class="data.isActive ? 'active' : 'not-active'"

    :class="[data.isActive ? 'active' : 'not-active', 'class']" // multiples
                  </code>
                </pre>
        </div>
      </div>
      <div>
        <h2 class="text-2xl text-black font-bold mb-4">
          Examples
        </h2>
        <h3 class="font-bold text-xl mb-2">
          User Status
        </h3>
        <p class="my-4">UI component, that when clicked toggles the status of the user, outputs they are online and has a green dot, a click event here is to demonstrate the functionality easily but this could be triggered by a app state change. The example component when viewed (/components/basics/userstatus.vue) shows the examples of a message being controlled by either a if/else statement or ternary and also how to track an event of in this example a button click.</p>
        <user-status />
      </div>
    </div>
  </div>
</template>

<script>
import UserStatus from "../../../components/Basics/UserStatus.vue"
import PageHeading from '../../../components/Page/PageHeading.vue'
import { reactive, ref, watchEffect } from 'vue'
export default {
  setup() {
    const root = ref(null)
    const data = reactive({
      websiteUrl: 'https://konx.dev',
      isActive: true,
      enteredWord: null,
      refOutput: null,
      classObject: {
        'class-object': true,
        'another-class-object': true,
      },
      classArray: ['class-one class-two class-three'],
    })

    watchEffect(() => {
        console.log(root.value)
    },
    {
        flush: 'post'
    })

    return {
      data,
      root,
      
    }
  },
  components: {
      'user-status' : UserStatus,
      'page-heading' : PageHeading
  }
}
</script>

<style lang="scss">
</style>