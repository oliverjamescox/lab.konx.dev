<template>
  <div class="font-display text-sm">
    <div class="nav-block">
      <div
        @click="accordionToggle()"
        class="transition duration-200 uppercase relative font-bold text-sm cursor-pointer text-white py-3 px-6 text-left hover:bg-green"
        :class="isExpanded ? 'bg-green' : null"
      >
        Features
      </div>
        
      <ul
        class="text-left cursor-pointer text-white"
        :class="isExpanded ? 'visible' : 'hidden'"
      >
        <router-link to="/documentation/features/lifecycle-hooks">
          <li
            @click="navCollapse()"
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey"
          >
            Lifecycle Hooks
          </li>
        </router-link>
        <router-link to="/documentation/features/composition-api">
          <li
            @click="navCollapse()"
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey"
          >
            Composition API
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Basics",
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
//     border-top: 2px solid $yellow;
    
    
//     &__child {
//         border-top: 1px solid $yellow;
//     }
// }
  
</style>