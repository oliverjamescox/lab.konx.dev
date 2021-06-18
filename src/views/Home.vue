<template>
  <!-- <page-hero
    :title="data.title"
    bg-colour="green"
    :description="data.description"
  /> -->
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <div class="p-10 flex flex-wrap justify-evenly">
      <page-card
        title="Features"
        link="/features"
        status="false"
      />
      <page-card
        title="Documentation"
        link="/documentation"
        status="true"
      />
      <page-card
        title="Components"
        link="/components"
        status="false"
      />
      <page-card
        title="Animation"
        link="/animation"
        status="true"
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
