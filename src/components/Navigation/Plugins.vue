<template>
  <div class="font-display text-sm">
    <div class="nav-block">
        <div @click="accordionToggle()" class="transition duration-200 text-sm uppercase relative font-bold cursor-pointer text-white py-3 px-6 text-left hover:bg-green" :class="isExpanded ? 'bg-green' : null">Plugins</div>
        
        <ul class="text-left cursor-pointer text-white" :class="isExpanded ? 'visible' : 'hidden'">
          <router-link to="/"><li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">Vue Router 4</li></router-link>
          <router-link to="/"><li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">Vuex</li></router-link>
          <router-link to="/"><li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">Apollo</li></router-link>
          <router-link to="/"><li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">Axios</li></router-link>
          <router-link to="/"><li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">?</li></router-link>
        </ul>
        
    </div>
      
  </div>
</template>

<script>
export default {
  name: "plugins",
  data() {
    return {
        isExpanded: false,
    }
  },
  methods: {
      accordionToggle() {
          this.isExpanded = !this.isExpanded;
      }
  },
  components: {}
};
</script>

<style lang="scss" scoped>

// .nav-block {
//     border-bottom: 2px solid $yellow;
//     border-top: 2px solid $yellow;
    
    
//     &__child {
//         border-top: 1px solid $yellow;
//     }
// }
  
</style>