<template>
  <div id="app" class="relative">
    <global-navigation></global-navigation>
    <div class="bg-grey-light w-screen h-full">
      <div class="container mx-auto p-20 bg-white h-screen">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Globals/Navigation.vue";
export default {
  components: {
    "global-navigation": Navigation,
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');
</style>