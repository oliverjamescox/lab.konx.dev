<template>
  <div class="font-display text-sm mb-2">
    <div class="nav-block">
        <div @click="accordionToggle()" class="transition duration-200 uppercase relative font-bold cursor-pointer text-white py-4 px-8 text-center hover:bg-green" :class="isExpanded ? 'bg-green' : null">Plugins</div>
        
        <ul class="text-center cursor-pointer text-white" :class="isExpanded ? 'visible' : 'hidden'">
          <router-link to="/"><li class="nav-block__child py-4 px-2 cursor-pointer transition duration-200 hover:bg-grey-light hover:text-grey">Vue Router 4</li></router-link>
          <router-link to="/"><li class="nav-block__child py-4 px-2 cursor-pointer transition duration-200 hover:bg-grey-light hover:text-grey">Vuex</li></router-link>
          <router-link to="/"><li class="nav-block__child py-4 px-2 cursor-pointer transition duration-200 hover:bg-grey-light hover:text-grey">Apollo</li></router-link>
          <router-link to="/"><li class="nav-block__child py-4 px-2 cursor-pointer transition duration-200 hover:bg-grey-light hover:text-grey">Axios</li></router-link>
          <router-link to="/"><li class="nav-block__child py-4 px-2 cursor-pointer transition duration-200 hover:bg-grey-light hover:text-grey">?</li></router-link>
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

.nav-block {
    border-bottom: 2px solid #41B883;
    border-top: 2px solid #41B883;
    
    
    &__child {
        border-top: 1px solid #41B883;
    }
}
  
</style>