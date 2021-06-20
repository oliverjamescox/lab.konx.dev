<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Documentation"
      bg-colour="green"
    />
    <div class="flex flex-col flex-wrap md:flex-row justify-evenly items-start p-6 md:p-12 lg:py-12 lg:px-20">
      <section-card :payload="sectionContent.documentation" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import PageHeading from '../../components/Page/PageHeading'
import SectionContent from '../../assets/data/content.json'
import SectionCard from '../../components/Page/SectionCard.vue'

export default {

  setup() {
    const data = reactive({
    })

    return {
      data,
      'sectionContent' : SectionContent,
    }
  },
  components: {
    'page-heading' : PageHeading,
    'section-card' : SectionCard
  }
}

</script>

<style lang="scss">

</style>