<template>
  <div>
    <div
      id="navigation"
      class="navigation__bar transition duration-500 fixed flex flex-row right-0 top-0 h-full bg-black"
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
      </div>
      <div class="navigation__sidebar bg-grey">
        <div class="text-white text-center py-6 md:py-10">
          logo here..
        </div>
        <div class="border-green border-t-2 relative mt-16">
          <div
            class="sidebar__heading cursor-pointer absolute text-white font-bold uppercase text-sm bg-green py-2 px-6"
            @click="vueToggle()"
          >
            Vue
          </div>
          <template v-if="vueOpen">
            <!-- <vue3-features /> -->
            <basics @navCollapse="navToggle()" />
            <plugins @navCollapse="navToggle()" />
          </template>
        </div>
        <!-- <div class="border-yellow border-t-2 relative mt-16">
          <div
            class="sidebar__heading cursor-pointer absolute text-grey font-bold uppercase text-sm bg-yellow py-2 px-6"
            @click="jsToggle()"
          >
            JavaScript
          </div>
          <template v-if="jsOpen">
            <vue3-features />
            <basics />
            <plugins />
          </template>
        </div> -->
        <!-- <div class="border-blue border-t-2 relative mt-16">
          <div
            class="sidebar__heading cursor-pointer absolute text-white font-bold uppercase text-sm bg-blue py-2 px-6"
            @click="tsToggle()"
          >
            TypeScript
          </div>
          <template v-if="tsOpen">
            <vue3-features />
            <basics />
            <plugins />
          </template>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
// import Vue3Features from "../Navigation/Vue3Features.vue";
import Basics from "../Navigation/Basics.vue";
import Plugins from "../Navigation/Plugins.vue";

export default {
  name: "GlobalNavigation",
  data() {
    return {
      isOpen: false,
      vueOpen: false,
      jsOpen: false,
      tsOpen: false,
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
      
      if (this.jsOpen || this.tsOpen) {
        this.jsOpen = false;
        this.tsOpen = false;
        
        this.vueOpen = !this.vueOpen;
      } else {
        this.vueOpen = !this.vueOpen;
      }

    },
    jsToggle() {

      if (this.vueOpen || this.tsOpen) {
        this.vueOpen = false;
        this.tsOpen = false;

        this.jsOpen = !this.jsOpen;
      } else {
        this.jsOpen = !this.jsOpen;
      }
    },
    tsToggle() {

      if (this.vueOpen || this.jsOpen) {
        this.vueOpen = false;
        this.jsOpen = false;

        this.tsOpen = !this.tsOpen;
      } else {
        this.tsOpen = !this.tsOpen;
      }
    }

  },
  components: {
    // 'vue3-features': Vue3Features,
    'basics': Basics,
    'plugins': Plugins,
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
    
    &__icon {
      
      width: 40px;
      height: 40px;
      top: 30px;
      left: -40px;


      // transform: rotate(45deg) translate(50%,100%);
      border-radius: 5px 0 0 5px;
      background: $black;
      
      .inner {
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%,-50%) rotate(-45deg);
        // top: 25px;
        // left: 7px;
        // transform: rotate(-45deg);
        top: 50%;
        left: 50%;
        transform: translate(-50%,-40%);
        color: $white;

        
        
      }
      
      // &.open {
        
      //   .inner {
      //     transform: rotate(135deg);
      //   }
      // }
      
    }
}
  
</style>