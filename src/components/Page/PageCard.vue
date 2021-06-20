<template>
  <router-link
    class="relative m-6 lg:m-0"
    :class="status === 'false' ? 'pointer-events-none opacity-25' : null"
    :to="link"
  >
    <div class="card border border-grey-lighter flex flex-col justify-center items-center">
      <div class="mt-12 mb-6 w-32 h-32">
        <VueLogo />
      </div>
      <div class="mb-4 p-2 w-full text-center text-blue-brand font-bold">
        {{ title }}
      </div>
    </div>
    <div class="card__border bg-blue-brand" />
  </router-link>
</template>
<script>
// Logos
import VueLogo from '../../assets/svg/vuejs.svg'

import { reactive } from 'vue'

export default {
    name: 'PageCard',
    props: {
      title: {
        type: String,
        required: true,
      },
      link: {
          type: String,
          required: true,
      },
      status: {
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
    },
    components: {
      VueLogo
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