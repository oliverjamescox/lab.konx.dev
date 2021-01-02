<template>
  <div
    id="app"
    class="relative"
  >
    <global-navigation />
    <div class="bg-grey-lighter w-full h-full min-h-screen">
      <div class="container mx-auto bg-white h-full">
        <router-view />
      </div>
      <!-- <holding-page></holding-page> -->
    </div>
  </div>
</template>

<script>
// import HoldingPage from './components/Globals/HoldingPage.vue';
import Navigation from "./components/Globals/Navigation.vue";
export default {
  components: {
    "global-navigation": Navigation,
    // 'holding-page' : HoldingPage,
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
</style>