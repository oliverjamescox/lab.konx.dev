<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Transition Group"
      bg-colour="green"
    />
    <div class="p-6 md:p-12 lg:py-12 lg:px-20">
      <div class="mb-8">
        <p class="mb-4">
          If there are multiple components that want to be targetted by the animation a transition-group wrapper can be used to replace the element, in this case it is the ul, passing the tag it was prior will have this still render and our animation name in this example is called "list".
        </p>
        <ul class="my-4">
          <li>[1]. Adding the prop of 'appear' on the transition-group means when the page first loads they are to be animated so rather than just popping in they appear and use the list-enter classes.</li>
          <li>[2]. Beyond leave/enter there is also move, this will animate of elements being added/removed</li>
          <li>[3]. Adding a position absolute on the list-leave-active class will mimic the list-move but for elements being removed.</li>
        </ul>
        <p class="mb-2"><strong>QUESTION</strong>: Why group transition and not just wrapped transition?</p>
        <p class="mb-4"><strong>ANSWER</strong>: transition group when there is more than one element created, i.e v-for, a conditional v-if and v-else would require only to be wrapped in a transition as there will only ever be one of them. (see example below)</p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    &lt;template&gt;
        &lt;div&gt;
            // BEFORE
            &lt;ul&gt;
                &lt;li v-for="(todo,index) in data.todos" :key="index"&gt;
                    // todo here in handlebars
                &lt;/li&gt;
            &lt;/ul&gt;

            // AFTER
            &lt;transition-group tag="ul" name="list" appear&gt; // [1]
                &lt;li v-for="(todo,index) in data.todos" :key="index"&gt;
                    // todo here in handlebars
                &lt;/li&gt;
            &lt;/transition-group&gt;

        &lt;/div&gt;
    &lt;/template&gt;

    &lt;style&gt;
      .list-enter-from {
          opacity: 0;
          transform: scale(0.5);
      }

      .list-enter-active {
          transition: all 0.4s ease;
      }

      .list-leave-to {
          opacity: 0;
          transform: scale(0.5);
      }

      .list-leave-active {
          transition: all 0.4s ease;
          position: absolute; /* [3] note - make sure parent has a relative tag */
      }

      /* [2] Uses a transform under the hood to move it into its new position */
      .list-move {
          transition: all 0.3s ease;
      }
    &lt;/style&gt;


                  </code>
          </pre>
        </div>
        <h3 class="mb-4 text-lg font-bold">Transitioning between elements</h3>
        <p class="my-2">
          Below standard v-if whereby the list will show only if there is a todo there, if the array length = 0 will instead render the v-else showing a simple message.
        </p>
        <h3 class="mb-4 text-lg font-bold">Using Mode</h3>
        <p class="my-2">
          mode="in-out" or mode="out-in" as both elements would be appearing on the screen at the same time there is a clash and jump when one element finishes it's animation, the mode tag added to the transition allows for the order to be specified, out-in being that the element will fade out and then the new element will fade in.
        </p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    &lt;template&gt;
        &lt;transition name="switch" mode="out-in"&gt;
            &lt;div v-if="todos.length"&gt;
                &lt;transition-group tag="ul" name="list" appear&gt;
                    &lt;li v-for="(todo,index) in data.todos" :key="index"&gt;
                        // todo here in handlebars
                    &lt;/li>
                &lt;/transition-group&gt;
            &lt;/div&gt;
            &lt;div v-else&gt;
                Woohoo, nothing left todo!
            &lt;/div&gt;
        &lt;/transition&gt;
    &lt;/template&gt;

    &lt;style&gt;

    /* cleaner and grouped transition classes, commented out again ones not needed but left for visibility */
    .switch-enter-from, .switch-leave-to {
        opacity: 0;
        transform: translateY(20px);
    }

    /* .switch-enter-to, .switch-leave-from {
        opacity: 1;
        transform: translateY(0);
    } */

    .switch-enter-active, .switch-leave-active {
        transition: all 0.5s ease;
    }

    &lt;/style&gt;
                  </code>
          </pre>
        </div>
        <div>
          TODO: demo for above here
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import PageHeading from '../../../components/Page/PageHeading.vue'

export default {
  setup() {

    return {
      
    }
  },
  components: {
    'page-heading' : PageHeading
  }
}
</script>

<style lang="scss">
</style>