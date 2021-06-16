<template>
  <div class="font-display text-sm">
    <div class="nav-block">
      <div
        @click="accordionToggle()"
        class="transition duration-200 text-sm uppercase relative font-bold cursor-pointer text-white py-3 px-6 text-left hover:bg-red"
        :class="isExpanded ? 'bg-red' : null"
      >
        Transitions
      </div>
        
      <ul
        class="text-left cursor-pointer text-white"
        :class="isExpanded ? 'visible' : 'hidden'"
      >
        <router-link to="/animation/transitions/transition-wrapper">
          <li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">
            Transition Wrapper
          </li>
        </router-link>
        <router-link to="/documentation/plugins/vuex">
          <li
            @click="navCollapse()"
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey"
          >
            Vuex
          </li>
        </router-link>
        <router-link to="/">
          <li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">
            Apollo
          </li>
        </router-link>
        <router-link to="/">
          <li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">
            Axios
          </li>
        </router-link>
        <router-link to="/">
          <li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">
            Google Analytics
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Plugins",
  emits: [
    'navCollapse',
  ],
  data() {
    return {
        isExpanded: false,
    }
  },
  methods: {
      accordionToggle() {
          this.isExpanded = !this.isExpanded;
      },
      navCollapse() {
        this.$emit('navCollapse');
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