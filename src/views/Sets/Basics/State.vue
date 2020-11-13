<template>
  <div class="text-grey leading-relaxed">
      <div class="mb-8">
            <h1 class="font-bold text-2xl leading-tight lg:text-3xl mb-4 text-black">State, Computed &amp; Methods (Using Composition API)</h1>
            <ul class="leading-normal">
                <li class="mb-2"><strong>State</strong> - The information/data currently available to the component (as a key value pair), this acts as reference point and continually updates depending on user interaction.</li>
                <li class="mb-2"><strong>Computed</strong> - Used to declaratively describe a value that depends on other values.</li>
                <li class="mb-2"><strong>Methods</strong> - Functions that hang off of an object and allow for state to be manipulated.</li>
            </ul>
      </div>
      <h2 class="text-2xl text-black font-bold mb-4">Examples</h2>
      <div class="mb-8">
          <h3 class="font-bold text-xl mb-2">Simple Count</h3>
          <p class="mb-4">Count is a variable on the current component, the computed in this example (countDoubled) watches for updates to the count to then update, on this occasion it's a simple way of doubling the current count and outputting to the user. Lastly the button has a click event that runs the method that increases the count by 1.</p>
          <div class="flex flex-col md:flex-row items-center">
              <button class="btn mb-4 md:mr-4 md:mb-0" @click="increment()">increase</button>
              Count: {{ state.count }} | Count (doubled): {{ state.countDoubled }}
          </div>
      </div>
      <!-- <div class="mb-10">
          <pre>
              <code >
const state = reactive({
  count: 0,
  countDoubled: computed(() => state.count * 2)
})
              </code>
            </pre>
      </div> -->
      <div>
          <h3 class="font-bold text-xl mb-2">Passing parameters / arguments to a function</h3>
          <p class="mb-4">Another example is passing information to a function for that to be used as part of the output, for this example I will used a variable in the current state and pass it into a function, this returns a string with a simple message using the provided variable for the name.</p>
          <div class="mb-6">
              <span class="border border-grey px-6 py-2 inline-block">"{{ userGreeting(state.username) }}"</span>
          </div>
          <div>
            <pre>
                <code >
userGreeting(state.username)
                </code>
              </pre>
          </div>
          <div>
            <pre>
                <code >
const state = reactive({
  username: 'Oliver',
})
                </code>
              </pre>
          </div>
      </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
  setup() {
    const state = reactive({
      count: 0,
      username: 'Oliver',
      countDoubled: computed(() => state.count * 2)
    })

    function increment() {
      state.count++
    }

    function userGreeting(param) {
        return `Hello ${param}!`
    }

    return {
      state,
      increment,
      userGreeting,
    }
  }
}

</script>

<style lang="scss">

</style>