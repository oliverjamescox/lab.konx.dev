<template>
  <div class="holding-page__container">
    <div class="flex flex-col justify-center items-center w-full h-full text-white uppercase">
      <font-awesome-icon
        class="text-4xl holding-page__logo"
        :icon="['fab', 'vuejs']"
      />
      <div class="my-10 text-lg">
        site under construction
      </div>
      <a
        class="underline relative z-10 hover:text-green text-sm"
        href="https://github.com/oliverjamescox/lab.konx.dev"
      >github repo</a>
    </div>
  </div>
</template>
<script>

import { reactive } from 'vue'

export default {
    name: 'HoldingPage',

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

.holding-page {
    &__container {
        background: $black;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        overflow: hidden;
        z-index: 9999;
    }

    &__logo {
        position: absolute;
        bottom: 0;
        right: 25%;
        opacity: 0.02;
        transform: scale(40);
    }
}

</style>