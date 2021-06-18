<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Router Transitions"
      bg-colour="green"
    />
    <div class="p-6 md:p-12 lg:py-12 lg:px-20">
      <div class="mb-8">
        <p class="mb-4">
          The ability to globally animate router-view changes with swipes, fades, flips and pseudo scrolls.
        </p>
        <p class="mb-2">
          Steps to implement on a Vue 3 project: 
        </p>
        <ul class="my-4">
          <li>[1]. Navigate to the App.vue and find the &lt;router-view /&gt; element.</li>
          <li>[2]. Expand to no longer be a self closing tag and instead as seen below.</li>
          <li>[3]. Add a dynamic component, looks a bit wierd, but is as recommended.</li>
        </ul>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    &lt;template&gt;
        &lt;default-header /&gt;

        &lt;router-view v-slot="{ Component }"&gt;
            &lt;transition name="route" mode="out-in"&gt;
                &lt;component is="Component"&gt;&lt;/component&gt;
            &lt;/transition&gt;
        &lt;/router-view&gt;

        &lt;default-footer /&gt;
    &lt;/template&gt;
    &lt;style&gt;

    .route-enter-from {
        opacity: 0;
        transform: translateX(100px);
    }

    .route-enter-active {
        transition: all 0.3s ease-out;
    }

    .router-leave-to {
        opacity: 0;
        transform: translate(-100px);
    }

    .route-leave-active {
        transition: all 0.3s ease-in;
    }

    &lt;/style&gt;


                  </code>
          </pre>
        </div>
        <p class="my-2">
          <strong>*** NOTE ABOUT ABOVE ***</strong> Found the above code block to be buggy moving between certain views so have instead implemented another one shown below, need to research.
        </p>
        
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    &lt;template&gt;
        &lt;default-header /&gt;

        &lt;transition name="route" mode="out-in"&gt;
            &lt;router-view /&gt;
        &lt;/transition&gt;

        &lt;default-footer /&gt;
    &lt;/template&gt;
                  </code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from '../../../components/Page/PageHeading.vue'

import TransitionWrapperExample from '../../../components/Transitions/TransitionWrapperExample.vue'

export default {
  setup() {

    return {
      'page-heading' : PageHeading,
      'transition-wrapper-example' : TransitionWrapperExample
    }
  }
}
</script>

<style lang="scss">
</style>