<template>
  <div class="text-grey leading-relaxed">
      <h1 class="font-bold text-3xl mb-4 text-black">Event Handling</h1>
      <div class="mb-8">
            <h2 class="text-2xl text-black font-bold mb-4">Listening to Events</h2>
            <p>To listen for events such as clicks we can use the v-on directive, or the @ symbol for short, with the purpose to then run some JavaScript when triggered.</p>
            <div>
              <pre class="">
                <code >
v-on:click="methodName"

@click="methodName"
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