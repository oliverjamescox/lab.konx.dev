<template>
  <div>
    <div class="navigation__bar transition duration-500 fixed flex flex-row right-0 top-0 h-full bg-green" :class="{ 'open' : isOpen }">
      <div @click="navToggle()" class="w-12 relative cursor-pointer">
        <div class="vue-title text-white font-body absolute">vuelab</div>
        <div class="navigation__icon absolute" :class="{ 'open' : isOpen }">
          <div class="inner transition duration-700 absolute">
            <font-awesome-icon class="chevron chevron--one text-lg" :icon="['fas', 'chevron-left']" />
            <font-awesome-icon class="chevron--two text-lg -ml-1" :icon="['fas', 'chevron-left']" />
          </div>
        </div>
      </div>
      <div class="navigation__sidebar bg-green-lighter">
        <div class="text-white text-center py-12">search component here..</div>
        <basics />
        <vue3-features />
      </div>
    </div>
  </div>
  
</template>

<script>
import Vue3Features from "../Navigation/Vue3Features.vue";
import Basics from "../Navigation/Basics.vue";

export default {
  name: "global-navigation",
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    navToggle() {
      this.isOpen = !this.isOpen;
    }  
  },
  components: {
    'vue3-features': Vue3Features,
    'basics': Basics,
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
      transform: translateX(300px);
      
      &.open {
        transform: translateX(0);
      }
    }
    
    &__sidebar {
      width: 300px;
    }
    
    &__icon {
      
      width: 40px;
      height: 40px;
      transform: rotate(45deg) translate(50%,100%);
      border-radius: 5px;
      background: #41B883;
      
      .inner {
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) rotate(-45deg);
        color: white;
        
      }
      
      &.open {
        
        .inner {
          transform: translate(-50%,-50%) rotate(135deg);
        }
      }
      
    }
}
  
</style>