<template>
  <div
    class="flex items-center pt-32 pb-16 px-8 md:pt-48 md:pb-32"
    :class="bgColour ? 'bg-' + bgColour : 'bg-black' "
  >
    <div class="container mx-auto">
      <h1 class="font-bold text-2xl sm:text-5xl lg:text-7xl text-white text-center sm:text-left">
        {{ title }}
      </h1>
      <h2 class="my-4 text-md sm:text-lg lg:text-xl text-white text-center sm:text-left leading-normal">
        {{ description }}
      </h2>
    </div>
  </div>
</template>
<script>

import { reactive } from 'vue'

export default {
    name: 'PageHeading',
    props: {
      title: {
        type: String,
        default: 'Page Title'
      },
      description: {
        type: String,
        default: 'Page Description not included'
      },
      bgColour: {
          type: String,
          default: 'black',
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