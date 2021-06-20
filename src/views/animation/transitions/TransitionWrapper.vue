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
        <h3 class="mb-4 text-lg font-bold">CSS Animation using transition classes</h3>
        <p class="my-2">
          <strong>*** assumes css animation knowledge ***</strong> Definitive example of a simple animation both appearing and disappearing, it will still work even with the fade-enter-to and fade-leave-from commented out as opacity by default is 1 so if thats all these 2 classes can be missed. classes can also be combined or nested if using scss, example below assumes vanilla css.
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
        <div class="my-8">
          <transition-wrapper-example transition="fade" />
        </div>
        
        <p class="mt-4">
          To demonstrate the animation I have attached it to a click event, just make sure the conditional sits within the transition wrapper otherwise it will just disappear.
        </p>   
      </div>
      <div class="mb-8">
        <h3 class="mb-4 text-lg font-bold">CSS Animation using @keyframes applied to transition classes</h3>
        <p class="my-2">
          <strong>*** assumes css animation knowledge ***</strong> Building on the above, this animation will complete the translateY and opacity by 50% and then perform a wobble with differing x positions up to 100%.
        </p>
        <p class="my-2">
          To apply a keyframe add the animation tag to the relevant vue transition class as below, also as the keyframe contains all of the information from start/finish/active the animation can be applied just to the enter-active and the other classes can be removed.
        </p>
        <div class="my-8">
          <transition-wrapper-example transition="fade-wobble" />
        </div>
        <div>
          <pre v-highlightjs>
                  <code class="html">
    &lt;style&gt;

    /* fade-wobble animation */

    .fade-wobble-enter-active {
        animation: wobble 0.5s ease;
    }

    .fade-wobble-leave-from {
        opacity: 1;
        transform: translateY(0)
    }

    .fade-wobble-leave-to {
        opacity: 0;
        transform: translateY(-20px)
    }

    .fade-wobble-leave-active {
        transition: all 0.5s ease;
    }

    @keyframes wobble {
        
        /* Starting Point */
        0% {
            transform: translateY(-20px);
            opacity: 0;
        }

        /* Mid point but transform and opacity have completed */
        50% {
            transform: translateY(0);
            opacity: 1;
        }

        /* Faux wobble by changing the x-axis every 10% but reducing the distance until 0 */
        60% { transform: translateX(6px); }
        70% { transform: translateX(-6px); }
        80% { transform: translateX(3px); }
        90% { transform: translateX(-3px); }
        100% { transform: translateX(0); }
    }

    &lt;/style&gt;
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
      
    }
  },
  components: {
    'page-heading' : PageHeading,
    'transition-wrapper-example' : TransitionWrapperExample
  }
}
</script>

<style lang="scss">
</style>