<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Transition Wrapper"
      bg-colour="green"
    />
    <div class="p-6 md:p-12 lg:py-12 lg:px-20">
      <div class="mb-8">
        <p class="mb-4">
          Wrap the component or element you wish to animation in a transition wrapper, this will then have the following classes available: 
        </p>
        <p class="mb-4">Entering the page:</p>
        <ul class="my-4">
          <li>- .enter-from - before it enters the browser (set initial css state)</li>
          <li>- .enter-to  - as it enters the browser (set final css state)</li>
          <li>- .enter-active - during the previous two</li>
        </ul>
        <p class="mb-4">leaving the page: (same as above)</p>
        <ul class="my-4">
          <li>- .leave-from</li>
          <li>- .leave-to</li>
          <li>- .leave-active</li>
        </ul>
        <div>
          <pre v-highlightjs>
                  <code class="html">
    &lt;template&gt;
        &lt;transition&gt;
            &lt;h1&gt;Hello&lt;/h1&gt;
        &lt;/transition&gt;
    &lt;/template&gt;

    &lt;style&gt;
    /* Starts invisibile to the user */
    .enter-from {
        opacity: 0;
    }

    /* Ends being fully visible */
    .enter-to {
        opacity: 1;
    }

    /* Takes 2seconds to achieve the above and uses ease */
    .enter-active {
        transition: opacity 2s ease;
    }
    &lt;/style&gt;
                  </code>
          </pre>
        </div>
        <p class="mb-4">To have multiple transitions on a component adding a name solves this, to add a name add it to the transition element with name="" and then in the styles block append all the enter &amp; leaves with the name of the animation, example below shows the animation name of fade.</p>
        <div>
          <pre v-highlightjs>
                  <code class="html">
    &lt;template&gt;
        &lt;transition name="fade"&gt;
            &lt;h1&gt;Hello&lt;/h1&gt;
        &lt;/transition&gt;
    &lt;/template&gt;

    &lt;style&gt;
    .fade-enter-from {
        opacity: 0;
    }
    .fade-enter-to {
        opacity: 1;
    }
    .fade-enter-active {
        transition: opacity 2s ease;
    }
    &lt;/style&gt;
                  </code>
          </pre>
        </div>
        <p class="my-2">
          Definitive example of a simple animation both appearing and disappearing, it will still work even with the fade-enter-to and fade-leave-from commented out as opacity by default is 1 so if thats all these 2 classes can be missed. classes can also be combined or nested if using scss, example below assumes vanilla css.
        </p>
        <div>
          <pre v-highlightjs>
                  <code class="html">
    &lt;template&gt;
        &lt;transition name="fade"&gt;
            &lt;h1&gt;Hello&lt;/h1&gt;
        &lt;/transition&gt;
    &lt;/template&gt;

    &lt;style&gt;
    .fade-enter-from, .fade-leave-to {
        opacity: 0;
        transform: translateY(-60px)
    }

    /* .fade-enter-to, .fade-leave-from {
        opacity: 1;
        transform: translateY(0)
    } */

    .fade-enter-active, .fade-leave-active {
        transition: all 1s ease;
    }

    &lt;/style&gt;
                  </code>
          </pre>
        </div>
        <transition-wrapper-example />        
      </div>
      <div class="mb-8">
        <p class="my-2">
          Definitive example of a simple animation both appearing and disappearing, it will still work even with the fade-enter-to and fade-leave-from commented out as opacity by default is 1 so if thats all these 2 classes can be missed. classes can also be combined or nested if using scss, example below assumes vanilla css.
        </p>
        <p>Using refs:</p>
        <ul>
          <li>- Attach a ref to a element i.e ref="root"</li>
          <li>- Create it in the setup like you would data()</li>
          <li>- To access the ref add to a watchEffect and append .value to the console.log</li>
          <li>- flush: 'post' is also required</li>
        </ul>
        <div class="my-4">
          <div class="flex flex-row items-center"> 
            <div ref="root">This is a root element watched by ref</div>
          </div>
        </div>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    // template
    ref="root"

    // script
    const root = ref(null)

    watchEffect(() => {
      console.log(root.value)
    }, 
    {
      flush: 'post'
    })
                  </code>
                </pre>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
import UserStatus from "../../../components/Basics/UserStatus.vue"
import PageHeading from '../../../components/Page/PageHeading.vue'

import TransitionWrapperExample from '../../../components/Transitions/TransitionWrapperExample.vue'

import { reactive, ref, watchEffect } from 'vue'
export default {
  setup() {
    const root = ref(null)
    const data = reactive({
      websiteUrl: 'https://konx.dev',
      isActive: true,
      enteredWord: null,
      refOutput: null,
      classObject: {
        'class-object': true,
        'another-class-object': true,
      },
      classArray: ['class-one class-two class-three'],
    })

    watchEffect(() => {
        console.log(root.value)
    },
    {
        flush: 'post'
    })

    return {
      data,
      root,
      'user-status' : UserStatus,
      'page-heading' : PageHeading,
      'transition-wrapper-example' : TransitionWrapperExample
    }
  }
}
</script>

<style lang="scss">
</style>