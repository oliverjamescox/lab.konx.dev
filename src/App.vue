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
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
// import HoldingPage from './components/Globals/HoldingPage.vue';
import Navigation from "./components/Globals/Navigation.vue";

import {getCLS, getFID, getLCP} from 'web-vitals';
import { useGtag } from "vue-gtag-next";

export default {
  
  setup() {

    const { event } = useGtag()

    onMounted(() => {
      console.log('mounted!')
      getCLS(sendToGoogleAnalytics)
      getFID(sendToGoogleAnalytics)
      getLCP(sendToGoogleAnalytics)
    })

    const data = reactive({
    })

    function sendToGoogleAnalytics({name, delta, id}) {
      console.log('web vitals event captured');
      event('send', 'event', {
          eventCategory: 'Web Vitals',
          eventAction: name,
          eventValue: Math.round(name === 'CLS' ? delta * 1000 : delta),
          eventLabel: id,
          nonInteraction: true,
          transport: 'beacon',
      });
    }

    return {
      data,
      sendToGoogleAnalytics,
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