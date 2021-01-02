<template>
  <div class="bg-green p-6 md:p-12 lg:px-20 lg:py-12">
      <h1 class="font-bold text-3xl lg:text-5xl text-white">
        {{ title }}
      </h1>
  </div>
</template>
<script>

import { reactive } from 'vue'

export default {
    name: 'PageHeading',
    props: {
      title: {
        type: String,
      }
    },
    setup() {
        const data = reactive({
        })

        return {
            data,
        }
  }
}
</script>
<style lang="scss" scoped>


</style>