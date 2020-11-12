<template>
  <div class="text-grey leading-relaxed">
      <div class="mb-8">
            <h1 class="font-bold text-3xl mb-4 text-black">State, Computed &amp; Methods (Using Composition API)</h1>
            <p class="mb-4 text-red">brief description about the heading here</p>
            <ul class="leading-normal">
                <li class="mb-2"><strong>State</strong> - The information/data currently available in the component as a key value pair, this acts as reference point and continually updates depending on user interaction. Such as a count</li>
                <li class="mb-2"><strong>Computed</strong> - They watch the values of properties and only update when that value is changed, i.e the count.</li>
                <li class="mb-2"><strong>Methods</strong> - They’re functions that hang off of an object and allow for state to be manipulated.</li>
            </ul>
      </div>
      <h2 class="text-2xl text-black font-bold mb-4">Examples</h2>
      <div class="mb-8">
          <h3 class="font-bold text-xl mb-2">Simple Count</h3>
          <p class="mb-4">Count is the variable with the current state, the computed in this example (countDoubled) watches for updates to the count to then run, on this occasion it's a simple way of doubling the current count and outputting to the user. Lastly the button has a on-click event that runs the method that increases the count by 1.</p>
          <div>
              <button class="border border-grey mr-4 px-6 py-2" @click="increment()">increase</button>
              Count: {{ state.count }} | Count (doubled): {{ state.countDoubled }}
          </div>
      </div>
      <div>
          <h3 class="font-bold text-xl mb-2">Passing parameters/arguments to a function</h3>
          <p class="mb-4">Another example is passing information to a function for that to be used as part of the output, for this example I will used a stored variable in the state and pass it into a function, this returns a string with a message using the provided variable for the name.</p>
          <div >
              <span class="border border-grey px-6 py-2 inline-block">"{{ userGreeting(state.username) }}"</span>
              <code class="bg-grey-light px-6 py-3 ml-4">userGreeting(state.username)</code>
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