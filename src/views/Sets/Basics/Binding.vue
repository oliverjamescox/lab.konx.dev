<template>
  <div class="text-grey leading-relaxed">
    <div class="mb-8">
      <h1 class="font-bold text-3xl mb-4 text-black">
        Binding
      </h1>
      <p class="mb-4 text-red">
        brief description about the heading here
      </p>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const state = reactive({
      
    })

    return {
      state,
    }
  }
}

</script>

<style lang="scss">

</style>