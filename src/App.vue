<template>
  <div
    
    class="relative"
  >
    <global-navigation />
    <div class="bg-grey-lighter w-full h-full min-h-screen">
      <div class="">
            <transition name="route" mode="out-in">
                <router-view />
            </transition>
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

<style>

.route-enter-from {
    opacity: 0;
    transform: translateX(100px);
}

.route-enter-active {
    transition: all 0.3s ease-out;
}

.route-leave-to {
    opacity: 0;
    transform: translate(-100px);
}

.route-leave-active {
    transition: all 0.3s ease-in;
}

</style>