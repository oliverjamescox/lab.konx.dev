<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Typescript"
      bg-colour="blue"
    />
    <div class="p-6 md:p-12 lg:py-12 lg:px-20">
      index
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import PageHeading from '../../components/Page/PageHeading.vue'

export default {

  setup() {
    const data = reactive({
    })

    return {
      data,
      'page-heading' : PageHeading 
    }
  }
}

</script>

<style lang="scss">

</style>