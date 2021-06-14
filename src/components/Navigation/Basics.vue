<template>
  <div class="font-display text-sm">
    <div class="nav-block">
      <div
        @click="accordionToggle()"
        class="transition duration-200 uppercase relative font-bold text-sm cursor-pointer text-white py-3 px-6 text-left hover:bg-green"
        :class="isExpanded ? 'bg-green' : null"
      >
        Basics
      </div>
        
      <ul
        class="text-left cursor-pointer text-white"
        :class="isExpanded ? 'visible' : 'hidden'"
      >
        <router-link to="/vue/basics/state">
          <li
            @click="navCollapse()"
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey"
          >
            State, Computed &amp; Methods
          </li>
        </router-link>
        <router-link to="/vue/basics/binding">
          <li
            @click="navCollapse()"
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey"
          >
            Data &amp; Class Binding
          </li>
        </router-link>
        <router-link to="/vue/basics/events">
          <li
            @click="navCollapse()"
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey"
          >
            Events
          </li>
        </router-link>
        <router-link to="/vue/basics/rendering">
          <li
            @click="navCollapse()"
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey"
          >
            Rendering
          </li>
        </router-link>
        <router-link to="/vue/basics/components">
          <li
            @click="navCollapse()"
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey"
          >
            Components
          </li>
        </router-link>
        <router-link to="/vue/basics/passing-data">
          <li
            @click="navCollapse()"
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey"
          >
            Passing Data
          </li>
        </router-link>
        <router-link to="/vue/basics/slots">
          <li
            @click="navCollapse()"
            class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey"
          >
            Slots &amp; Dynamic Components
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