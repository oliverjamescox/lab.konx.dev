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
        image="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        status="true"
      />
      <page-card
        title="JavaScript"
        link="/javascript"
        image="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
        status="false"
      />
      <page-card
        title="TypeScript"
        link="/typescript"
        image="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
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
