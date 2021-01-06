<template>
  <div class="text-grey leading-relaxed">
    <h1 class="font-bold text-3xl mb-4 text-black">
      Event Handling
    </h1>
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Listening to Events
      </h2>
      <p>
        To listen for events such as clicks we can use the v-on directive, or the @ symbol for short, with the purpose to then run some JavaScript when triggered. Data attributes can be updated on clicks but I personally pass in a method for readability.
      </p>
      <div>
        <pre class="">
                <code>
v-on:click="methodName"

@click="methodName"
                </code>
              </pre>
      </div>
      <p>
        Single clicks can be performed with @click, doubles are simply @dblclick.
      </p>
      <p>
        You can also pass the variable of $event into the method to recieve information about the dom element such as positioning, classlists and the type of event it is.
      </p>
      <div>
        <pre class="">
                <code>
@click="methodName($event)"

methodName(event) {
  console.log(event);
}
                </code>
              </pre>
      </div>
    </div>
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Event Modifiers
      </h2>
      <p>
        Vue provides modifiers that can be appended straight onto directives, below are an overview of all the available and example use cases for reference.
      </p>
      <ul class="m-4">
        <li><strong>.stop</strong> - the click event's propagation will be stopped</li>
        <li><strong>.prevent</strong> - the submit event will no longer reload the page</li>
        <li><strong>.capture</strong> - tbc</li>
        <li><strong>.self</strong> - tbc</li>
        <li><strong>.once</strong> - the click event will be triggered once</li>
        <li><strong>.passive</strong> - tbc</li>
      </ul>
      <div>
        <pre class="">
                <code>
// modifiers can be chained
v-on:click.stop.prevent="doThat"
                </code>
              </pre>
      </div>
      <p>Order matters when using modifiers because the relevant code is generated in the same order.</p>
      <div>
        <pre class="">
                <code>
// prevents all clicks
v-on:click.prevent.self

// will only prevent clicks on the element itself
v-on:click.self.prevent
                </code>
              </pre>
      </div>
    </div>
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Mouse Events (TBC)
      </h2>
      <p>
        click, dblclick, scroll etc.
      </p>
      <div>
        <pre class="">
                <code>
// mouse events
                </code>
              </pre>
      </div>
    </div>
    <div class="mb-8">
      <h2 class="text-2xl text-black font-bold mb-4">
        Keyboard Events (TBC)
      </h2>
      <p>
        keyup keydown etc.
      </p>
      <div>
        <pre class="">
                <code>
// keyboard events
                </code>
              </pre>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {

  setup() {
    const data = reactive({
    })

    return {
      data,
    }
  }
}

</script>

<style lang="scss">

</style>