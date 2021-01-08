<template>
  <page-hero
    :title="data.title"
    bg-colour="green"
    :description="data.description"
  />
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <div class="p-10 flex flex-wrap justify-evenly">
      <page-card
        title="Vue"
        link="/vue"
        status="true"
      />
      <page-card
        title="JavaScript"
        link="/javascript"
        status="false"
      />
      <page-card
        title="TypeScript"
        link="/typescript"
        status="false"
      />
    </div>
    <!-- Highlighted components, component search index to go here -->
  </div>
</template>

<script>
import PageHero from '../components/Page/PageHero.vue'
import PageCard from '../components/Page/PageCard.vue'

import { reactive } from 'vue'

export default {
  setup() {
    const data = reactive({
      description: 'Collection of learning resources & components for web dev languages and frameworks.',
      title: 'Development Lab'
    })

    return {
      data,
      'page-hero' : PageHero,
      'page-card' : PageCard,
    }
  }
}

</script>

<style>

</style>
