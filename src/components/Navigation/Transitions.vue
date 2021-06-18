<template>
  <div class="font-display text-sm">
    <div class="nav-block">
      <div
        @click="accordionToggle()"
        class="transition duration-200 text-sm uppercase relative font-bold cursor-pointer text-white py-3 px-6 text-left hover:bg-green"
        :class="isExpanded ? 'bg-green' : null"
      >
        Transitions
      </div>
        
      <ul
        class="text-left cursor-pointer text-white"
        :class="isExpanded ? 'visible' : 'hidden'"
      >
        <router-link to="/animation/transitions/transition-wrapper">
          <li 
          @click="navCollapse()"
          class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey"
          >
            &lt;transition&gt; Wrapper
          </li>
        </router-link>
        <router-link to="/animation/transitions/transition-group">
          <li
            @click="navCollapse()"
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey"
          >
            &lt;transition-group&gt;
          </li>
        </router-link>
        <router-link to="/animation/transitions/router-transitions">
          <li 
            @click="navCollapse()"
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">
            Router Transitions
          </li>
        </router-link>
        <router-link to="/animation/transitions/javascript-hooks">
          <li
            @click="navCollapse()" 
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">
            JavaScript Hooks
          </li>
        </router-link>
        <router-link to="/animation/transitions/gsap">
          <li
            @click="navCollapse()" 
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">
            Vue &amp; GSAP
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