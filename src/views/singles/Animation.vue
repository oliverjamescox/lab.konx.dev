<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Animation"
      bg-colour="green"
    />
    <div class="flex flex-col flex-wrap md:flex-row justify-evenly items-start p-6 md:p-12 lg:py-12 lg:px-20">
      <section-card :payload="sectionContent.animation" />
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import PageHeading from '../../components/Page/PageHeading'
import SectionContent from '../../assets/data/content.json'
import SectionCard from '../../components/Page/SectionCard.vue'

export default {
  components: { SectionCard, PageHeading },

  setup() {
    const data = reactive({
    })

    return {
      data,
      'page-heading' : PageHeading,
      'sectionContent' : SectionContent,
      'section-card' : SectionCard, 
    }
  }
}

</script>

<style lang="scss">

</style>