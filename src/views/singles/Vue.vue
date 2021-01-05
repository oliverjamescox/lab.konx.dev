<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Vue"
      bg-colour="green"
    />
    <div class="flex flex-col flex-wrap md:flex-row justify-evenly items-center p-6 md:p-12 lg:py-12 lg:px-20">
      <div class="w-full page-card my-4 md:m-4 border border-grey">
        <h2 class="font-bold text-xl bg-grey px-4 py-2 text-left text-white">Plugins</h2>
        <div class="flex flex-col px-4 py-1">
          <router-link class="py-2 border-dotted border-b border-grey hover:text-green" to="/vue/vue3-features/overview">Vue Router 4</router-link>
          <router-link class="py-2 border-dotted border-b border-grey  hover:text-green" to="/vue/vue3-features/overview">Vuex 4</router-link>
          <router-link class="py-2 border-dotted border-b border-grey  hover:text-green" to="/vue/vue3-features/overview">Apollo</router-link>
          <router-link class="py-2 border-dotted border-b border-grey  hover:text-green" to="/vue/vue3-features/overview">Axios</router-link>
          <router-link class="py-2  hover:text-green" to="/vue/vue3-features/overview">Google Analytics</router-link>
        </div>
      </div>
      <div class="w-full my-4 md:m-4 page-card border border-grey">
        <h2 class="font-bold text-xl bg-grey px-4 py-2 text-left text-white">Plugins</h2>
        <div class="flex flex-col px-4 py-1">
          <router-link class="py-2 border-dotted border-b border-grey hover:text-green" to="/vue/vue3-features/overview">Vue Router 4</router-link>
          <router-link class="py-2 border-dotted border-b border-grey  hover:text-green" to="/vue/vue3-features/overview">Vuex 4</router-link>
          <router-link class="py-2 border-dotted border-b border-grey  hover:text-green" to="/vue/vue3-features/overview">Apollo</router-link>
          <router-link class="py-2 border-dotted border-b border-grey  hover:text-green" to="/vue/vue3-features/overview">Axios</router-link>
          <router-link class="py-2  hover:text-green" to="/vue/vue3-features/overview">Google Analytics</router-link>
        </div>
      </div>
      <div class="w-full my-4 md:m-4 page-card border border-grey">
        <h2 class="font-bold text-xl bg-grey px-4 py-2 text-left text-white">Plugins</h2>
        <div class="flex flex-col px-4 py-1">
          <router-link class="py-2 border-dotted border-b border-grey hover:text-green" to="/vue/vue3-features/overview">Vue Router 4</router-link>
          <router-link class="py-2 border-dotted border-b border-grey  hover:text-green" to="/vue/vue3-features/overview">Vuex 4</router-link>
          <router-link class="py-2 border-dotted border-b border-grey  hover:text-green" to="/vue/vue3-features/overview">Apollo</router-link>
          <router-link class="py-2 border-dotted border-b border-grey  hover:text-green" to="/vue/vue3-features/overview">Axios</router-link>
          <router-link class="py-2  hover:text-green" to="/vue/vue3-features/overview">Google Analytics</router-link>
        </div>
      </div>
      <div class="w-full my-4 md:m-4 page-card border border-grey">
        <h2 class="font-bold text-xl bg-grey px-4 py-2 text-left text-white">Plugins</h2>
        <div class="flex flex-col px-4 py-1">
          <router-link class="py-2 border-dotted border-b border-grey hover:text-green" to="/vue/vue3-features/overview">Vue Router 4</router-link>
          <router-link class="py-2 border-dotted border-b border-grey  hover:text-green" to="/vue/vue3-features/overview">Vuex 4</router-link>
          <router-link class="py-2 border-dotted border-b border-grey  hover:text-green" to="/vue/vue3-features/overview">Apollo</router-link>
          <router-link class="py-2 border-dotted border-b border-grey  hover:text-green" to="/vue/vue3-features/overview">Axios</router-link>
          <router-link class="py-2  hover:text-green" to="/vue/vue3-features/overview">Google Analytics</router-link>
        </div>
      </div>
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

.page-card {

  max-width: none;
  border-radius: 5px;
  background-color: #ffffff;
  background-image: linear-gradient(130deg, #ffffff 50%, #F2F2F2 90%);

  @include min-bp($md) {
    max-width: 240px;
  }
}

</style>