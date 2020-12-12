<template>
  <div class="font-display text-sm">
    <div class="nav-block">
        <div @click="accordionToggle()" class="transition duration-200 uppercase relative text-sm font-bold cursor-pointer text-white py-3 px-6 text-left hover:bg-green" :class="isExpanded ? 'bg-green' : null">New with Vue 3</div>
        
        <ul class="text-left text-white" :class="isExpanded ? 'visible' : 'hidden'">
          <router-link to="/vue3-features/overview"><li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">Overview</li></router-link>
          <router-link to="/"><li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">item 2</li></router-link>
          <router-link to="/"><li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">item 3</li></router-link>
          <router-link to="/"><li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">item 4</li></router-link>
          <router-link to="/"><li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">item 5</li></router-link>
        </ul>
        
    </div>
      
  </div>
</template>

<script>
export default {
  name: "vue3-features",
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
//     border-top: 1px solid $grey--lighter;
    
    
//     &__child {
//         border-top: 1px solid $white;
//     }
// }

.text-is-black {
  color: $black;
}
  
</style>