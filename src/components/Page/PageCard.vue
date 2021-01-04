<template>
  <router-link class="relative m-6 lg:m-0" :to="link">
    <div class="card border border-grey-lighter flex flex-col justify-between items-center">
      <div>logo svg here</div>
      <div class="mb-4 p-2 w-full text-center text-grey font-bold bg-white">{{ title }}</div>
    </div>
    <div class="card__border" :class="bgColour ? 'bg-' + bgColour : 'bg-grey' "></div>
    
  </router-link>
</template>
<script>

import { reactive } from 'vue'

export default {
    name: 'PageCard',
    props: {
      bgColour: {
          type: String,
          default: 'grey',
      },
      title: {
        type: String,
        required: true,
      },
      link: {
          type: String,
          required: true,
      }
    },
    setup() {
        const data = reactive({
        })

        return {
            data,
        }
  }
}
</script>
<style lang="scss" scoped>

.card {
  width: 250px;
  height: 300px;
  position: relative;
  background-color: #ffffff;
  background-image: linear-gradient(130deg, #ffffff 0%, #F2F2F2 90%);
  z-index: 5;
  border-radius: 5px;

  &__border {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: -0.5rem;
    right: -0.5rem;
    z-index: 4;
    border-radius: 5px;
  }

}

</style>