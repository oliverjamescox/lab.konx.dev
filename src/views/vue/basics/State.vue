<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="State, Computed &amp; Methods"
      bg-colour="green"
    />
    <div class="p-6 md:p-12 lg:py-12 lg:px-20">
      <div class="mb-8">
        <ul class="leading-normal">
          <li class="mb-2">
            <strong>State</strong> - The information/data currently available to the component (as a key value pair), this acts as reference point and continually updates depending on user interaction.
          </li>
          <li class="mb-2">
            <strong>Computed</strong> - Used to declaratively describe a value that depends on other values.
          </li>
          <li class="mb-2">
            <strong>Methods</strong> - Functions that hang off of an object and allow for state to be manipulated.
          </li>
        </ul>
      </div>
      <h2 class="text-2xl text-black font-bold mb-4">
        Examples
      </h2>
      <div class="">
        <h3 class="font-bold text-xl mb-2">
          Simple Count
        </h3>
        <p class="mb-4">
          Count is a variable on the current component, the computed in this example (countDoubled) watches for updates to the count to then update, on this occasion it's a simple way of doubling the current count and outputting to the user. Lastly the button has a click event that runs the method that increases the count by 1.
        </p>
        <div class="flex flex-col md:flex-row items-center mb-4">
          <button
            class="btn mb-4 md:mr-4 md:mb-0"
            @click="increment()"
          >
            increase
          </button>
          count: {{ data.count }} | countDoubled: {{ data.countDoubled }}
        </div>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    const data = reactive({
      count: 0,
      countDoubled: computed(() => data.count * 2)
    })

    function increment() {
      data.count++
    }
                  </code>
                </pre>
        </div>
      </div>
      <div class="">
        <h3 class="font-bold text-xl mb-2">
          Passing parameters / arguments to a function
        </h3>
        <p class="mb-4">
          Passing information to a function for that to be used as part of the output, by using a variable in the current state and passing it into a function, this returns a string with a simple message using the provided variable for the name.
        </p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    const data = reactive({
      username: 'Oliver',
    })

    function userGreeting(param) {
      return `Hello ${param}!`
    }

    // Usage
    userGreeting(data.username)

    // Output
    {{ userGreeting(data.username) }}
                  </code>
                </pre>
        </div>
      </div>
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold mb-4">
          Methods vs Computed
        </h2>
        <p class="my-4">
          <strong>Computed - </strong>Most important takeaway is you don't call a computed, also it doesn't accept any parameters. You reference a computed property just like you would a data property. Computed values are very valuable for manipulating data that exists on your Vue. Whenever you want to filter or transform your data, typically you will use a computed value for that purpose.
        </p>
        <p>When to use computed properties:</p>
        <ul class="my-2">
          <li>- You need to compose new data from existing data sources</li>
          <li>- You have a variable you use in your template that’s built from one or more data properties</li>
          <li>- You want to reduce a complicated, nested property name to a more readable and easy to use one (but update it when the original property changes)</li>
          <li>- You need to reference a value from the template. In this case, creating a computed property is the best thing, because it’s cached.</li>
          <li>- You need to listen to changes of more than one data property</li>
        </ul>
        <p class="my-4"><strong>Method - </strong>A method is just a function bound to the Vue instance. It will only be evaluated when you explicitly call it. (like with a click event) Like all javascript functions it accepts parameters and will be re-evaluated every time it's called. Methods are useful in the same situations any function is useful.</p>
        <p>When to use methods:</p>
        <ul>
          <li>- To react to some event happening in the DOM</li>
          <li>- To call a function when something happens in your component</li>
          <li>- You can call a method from computed properties or watchers</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from '../../../components/Page/PageHeading.vue'
import { reactive, computed } from 'vue'
export default {
  setup() {
    const data = reactive({
      count: 0,
      username: 'Oliver',
      countDoubled: computed(() => data.count * 2)
    })
    function increment() {
      data.count++
    }
    function userGreeting(param) {
        return `Hello ${param}!`
    }
    return {
      data,
      increment,
      userGreeting,
      'page-heading' : PageHeading 
    }
  }
}
</script>

<style lang="scss">
</style>