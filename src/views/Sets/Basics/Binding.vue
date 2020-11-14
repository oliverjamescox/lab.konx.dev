<template>
  <div class="text-grey leading-relaxed">
      <h1 class="font-bold text-3xl mb-4 text-black">Binding</h1>
      <div class="mb-8">
            
            <h2 class="text-2xl text-black font-bold mb-4">Data Binding</h2>
            <p>
                If we want to bind data to any kind of attribute such as a href link a directive must be used. Such as v-bind:href or the shortcode of :href.
            </p>
            <div>
              <pre class="">
                <code >
const state = reactive({
  websiteUrl: 'https://konx.dev',
})

// Usage
v-bind:href="websiteUrl"

// Output
a href="https://konx.dev"
                </code>
              </pre>
          </div>
          <p>Another alternative is storing the entire html tag in a data value with the key for output and applying it to a DOM element with the v-html directive.</p>
          <div>
              <pre class="">
                <code >
const state = reactive({
  websiteTag: 'a href="https://konx.dev">website'
})

// Usage (on an element, ie div, span etc)
v-html="websiteTag"
                </code>
              </pre>
          </div>
      </div>
      <div class="mb-8">
            
            <h2 class="text-2xl text-black font-bold mb-4">Class Binding</h2>
            <p>
                We can pass an object to :class (short for v-bind:class) to dynamically toggle classes. You can have multiple classes toggled by having more fields in the object. In addition, the :class directive can also co-exist with the plain class attribute. The below code example is inline.
            </p>
            <div>
              <pre class="">
                <code >
:class="{ 'active' : isActive }"

:class="{ 'active' : isActive, 'green' : isGreen }" // inline example
                </code>
              </pre>
          </div>
          <p>The above syntax means if the data property of isActive evaluates to true the class active will be added to the element.</p>
      </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const data = reactive({
      websiteUrl: 'https://konx.dev',
    })

    return {
      data,
    }
  }
}

</script>

<style lang="scss">

</style>