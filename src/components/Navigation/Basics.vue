<template>
  <div class="font-display text-sm mb-2">
    <div class="nav-block">
        <div @click="accordionToggle()" class="transition duration-200 uppercase relative font-bold cursor-pointer text-white py-4 px-8 text-center hover:bg-green" :class="isExpanded ? 'bg-green' : null">Basics</div>
        
        <ul class="text-center text-white" :class="isExpanded ? 'visible' : 'hidden'">
          <li class="nav-block__child py-4 px-2 cursor-pointer transition duration-200 hover:bg-grey-light hover:text-grey"><router-link to="/basics/state">State, Computed &amp; Methods</router-link></li>
          <li class="nav-block__child py-4 px-2 cursor-pointer transition duration-200 hover:bg-grey-light hover:text-grey"><router-link to="/basics/binding">Binding</router-link></li>
          <li class="nav-block__child py-4 px-2 cursor-pointer transition duration-200 hover:bg-grey-light hover:text-grey">item 3</li>
          <li class="nav-block__child py-4 px-2 cursor-pointer transition duration-200 hover:bg-grey-light hover:text-grey">item 4</li>
          <li class="nav-block__child py-4 px-2 cursor-pointer transition duration-200 hover:bg-grey-light hover:text-grey">item 5</li>
        </ul>
        
    </div>
      
  </div>
</template>

<script>
export default {
  name: "basics",
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