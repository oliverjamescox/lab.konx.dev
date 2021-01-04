<template>
  <div
    class="p-6 pr-10 md:p-12 lg:px-20 lg:py-12"
    :class="bgColour ? 'bg-' + bgColour : 'bg-black' "
  >
    <h1 class="font-bold text-xl sm:text-3xl lg:text-5xl text-white">
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
        default: 'Page Title'
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