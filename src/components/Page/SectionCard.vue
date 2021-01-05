<template>
    <div v-for="(entry,index) in payload" :key="index" class="w-full section-card my-4 md:m-4 border border-grey-lighter">
        <h2 class="font-bold text-xl bg-grey px-4 py-2 text-left text-white capitalize">
          {{ index }}
        </h2>
        <router-link
            v-for="item in entry" :key="item.id"
            class="section-card__item flex flex-col py-2 px-4 border-b border-dotted border-grey-lighter hover:text-green"
            :to="item.url"
        >
            {{item.title}}
        </router-link>
    </div>
</template>
<script>

import { reactive } from 'vue'

export default {
    name: 'SectionCard',
    props: {
      payload: {
        type: Object,
        required: true,
      },
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

.section-card {

    max-width: none;
    border-radius: 5px;
    background-color: #ffffff;
    background-image: linear-gradient(130deg, #ffffff 20%, rgba(242, 242, 242, 0.25) 90%);

    @include min-bp($md) {
        max-width: 240px;
    }

    &__item {
        

        &:last-child {
            border: none;
        }
    }

    h2 {
        border-radius: 5px 5px 0 0;
    }
}


</style>

