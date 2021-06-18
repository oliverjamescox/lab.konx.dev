<template>
  <div>
    <div
      id="navigation"
      class="navigation__bar transition duration-500 fixed flex flex-row right-0 top-0 h-full bg-blue-brand"
      :class="{ 'open' : isOpen }"
    >
      <div
        @click="navToggle()"
        class="w-2 relative cursor-pointer"
      >
        <!-- <div class="vue-title hidden lg:block text-white font-body absolute">javascriptlab</div> -->
        <div
          class="navigation__icon absolute"
          :class="{ 'open' : isOpen }"
        >
          <div class="inner transition duration-700 absolute">
            <template v-if="isOpen">
              <font-awesome-icon
                class="text-xl"
                :icon="['fas', 'times']"
              />
            </template>
            <template v-else>
              <font-awesome-icon
                class="text-xl"
                :icon="['fas', 'bars']"
              />
            </template>
          </div>
        </div>
        <router-link to="/" class="navigation__home absolute">
          <div class="inner transition duration-700 absolute">
              <font-awesome-icon
                class="text-xl text-white"
                :icon="['fas', 'home']"
              />
          </div>
        </router-link>
      </div>
      <div class="navigation__sidebar bg-grey">
        <div class="py-5 flex justify-center items-center">
          <div class="h-16 w-16">
              <VueLogo />
          </div>
        </div>
        <!-- <div class="border-blue-brand border-t-2 relative mt-16">
          <div
            class="sidebar__heading cursor-pointer absolute text-grey-lighter font-bold uppercase text-sm bg-blue-brand py-2 px-6"
            @click="featuresToggle()"
          >
            Features
          </div>
          <template v-if="featuresOpen">
          </template>
        </div> -->
        <div class="border-green border-t-2 relative mt-16">
          <div
            class="sidebar__heading cursor-pointer absolute text-grey-lighter font-bold uppercase text-sm bg-green py-2 px-6"
            @click="vueToggle()"
          >
            Documentation
          </div>
          <template v-if="vueOpen">
            <basics @navCollapse="navToggle()" />
            <features @navCollapse="navToggle()" />
            <plugins @navCollapse="navToggle()" />
          </template>
        </div>
        <div class="border-blue-brand border-t-2 relative mt-16">
          <div
            class="sidebar__heading cursor-pointer absolute text-grey-lighter font-bold uppercase text-sm bg-blue-brand py-2 px-6"
            @click="compToggle()"
          >
            Components
          </div>
          <template v-if="compOpen">
          </template>
        </div>
        <div class="border-green border-t-2 relative mt-16">
          <div
            class="sidebar__heading cursor-pointer absolute text-grey-lighter font-bold uppercase text-sm bg-green py-2 px-6"
            @click="animToggle()"
          >
            Animation
          </div>
          <template v-if="animOpen">
            <transitions @navCollapse="navToggle()" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueLogo from "../../assets/svg/vuejs.svg";
import Basics from "../Navigation/Basics.vue";
import Plugins from "../Navigation/Plugins.vue";
import Features from "../Navigation/Features.vue";
import Transitions from "../Navigation/Transitions.vue";

export default {
  name: "GlobalNavigation",
  data() {
    return {
      isOpen: false,
      vueOpen: false,
      featuresOpen: false,
      compOpen: false,
      animOpen: false,
    }
  },
  methods: {
    navToggle() {
      this.isOpen = !this.isOpen;

      let element = document.body

      if(element.classList.contains('overflow-hidden')) {
        element.classList.remove('overflow-hidden');
      } else {
        element.classList.add('overflow-hidden');
      }

    },
    vueToggle() {
      
      if (this.featuresOpen || this.compOpen || this.animOpen) {
        this.featuresOpen = false;
        this.compOpen = false;
        this.animOpen = false;
        
        this.vueOpen = !this.vueOpen;
      } else {
        this.vueOpen = !this.vueOpen;
      }

    },
    featuresToggle() {

      if (this.vueOpen || this.compOpen || this.animOpen) {
        this.vueOpen = false;
        this.compOpen = false;
        this.animOpen

        this.featuresOpen = !this.featuresOpen;
      } else {
        this.featuresOpen = !this.featuresOpen;
      }
    },
    compToggle() {

      if (this.vueOpen || this.featuresOpen || this.animOpen) {
        this.vueOpen = false;
        this.featuresOpen = false;
        this.animOpen = false;

        this.compOpen = !this.compOpen;
      } else {
        this.compOpen = !this.compOpen;
      }
    },
    animToggle() {

      if (this.vueOpen || this.featuresOpen || this.compOpen) {
        this.vueOpen = false;
        this.featuresOpen = false;
        this.compOpen = false;

        this.animOpen = !this.animOpen;
      } else {
        this.animOpen = !this.animOpen;
      }
    }

  },
  components: {
    'basics': Basics,
    'plugins': Plugins,
    'features': Features,
    'transitions': Transitions,
    VueLogo
  }
};
</script>

<style lang="scss" scoped>

.vue-title {
    bottom: 0;
    left: 50%;
    transform: rotate(-90deg) translate(70%,-160%);
}
.navigation {
    
    &__bar {
      transform: translateX(100%);
      width: 85%;

      @include min-bp($sm) {
        width: unset;
      }

      @include min-bp($md) {
        transform: translateX(300px);
      }
    
      z-index: 10;
      
      &.open {
        transform: translateX(0);
      }
    }
    
    &__sidebar {
      width: 300px;
      overflow: auto;

      .sidebar__heading {
        top: -37px;
        left: 20px;
        width: auto;
        text-align: center;
        // border-radius: 5px 5px 0 0;
        // transform: translateX(-50%);

      }

    }
    
    &__icon, &__home {
      
      width: 40px;
      height: 40px;
      top: 30px;
      left: -40px;
      border-radius: 5px 0 0 5px;
      background: $grey;
      
      .inner {
        top: 50%;
        left: 50%;
        transform: translate(-50%,-40%);
        color: $white;
      }
    }

    &__home {
      top: 75px;
    }
}
  
</style>