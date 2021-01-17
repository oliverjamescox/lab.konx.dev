<template>
  <div
    
    class="relative"
  >
    <global-navigation />
    <div class="bg-grey-lighter w-full h-full min-h-screen">
      <div class="">
        <router-view />
      </div>
      <!-- <holding-page></holding-page> -->
      <!-- <button @click="gaTest()">ga test</button> -->
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
// import HoldingPage from './components/Globals/HoldingPage.vue';
import Navigation from "./components/Globals/Navigation.vue";

// import {getCLS, getFID, getLCP} from 'web-vitals';
// import { useGtag } from "vue-gtag-next";

export default {
  
  setup() {

    const data = reactive({
    })

    // const { event } = useGtag()

    // function sendToGoogleAnalytics({name, delta, id}) {
    //   event('event', name, {
    //     event_category: 'Web Vitals',
    //     value: Math.round(name === 'CLS' ? delta * 1000 : delta),
    //     event_label: id,
    //     non_interaction: true,
    //   });
    // }

    // function gaTest() {
    //   getCLS(sendToGoogleAnalytics);
    //   getFID(sendToGoogleAnalytics);
    //   getLCP(sendToGoogleAnalytics);
    // }




    return {
      data,
      // sendToGoogleAnalytics,
      // gaTest
    }
  },
    components: {
    "global-navigation": Navigation,
    // 'holding-page' : HoldingPage,
  }
}
</script>

<style lang="scss">
</style>