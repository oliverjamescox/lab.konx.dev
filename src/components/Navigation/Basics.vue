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
        <router-link to="/basics/state">
          <li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">
            State, Computed &amp; Methods
          </li>
        </router-link>
        <router-link to="/basics/binding">
          <li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">
            Data &amp; Class Binding
          </li>
        </router-link>
        <router-link to="/basics/events">
          <li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">
            Events
          </li>
        </router-link>
        <router-link to="/">
          <li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">
            ?
          </li>
        </router-link>
        <router-link to="/">
          <li class="nav-block__child text-sm py-2 px-6 cursor-pointer transition duration-200 hover:bg-grey-lighter hover:text-grey">
            ?
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Basics",
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
//     border-top: 2px solid $yellow;
    
    
//     &__child {
//         border-top: 1px solid $yellow;
//     }
// }
  
</style>