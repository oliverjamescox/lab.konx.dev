<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Event Handling"
      bg-colour="green"
    />
    <div class="p-6 md:p-12 lg:py-12 lg:px-20">
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold mb-4">
          Listening to Events
        </h2>
        <p>
          To listen for events such as clicks we can use the v-on directive, or the @ symbol for short, with the purpose to then run some code when triggered. Data attributes can be updated on clicks but I personally pass in a method for readability.
        </p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    v-on:click="methodName"

    @click="methodName"
                  </code>
                </pre>
        </div>
        <p>
          Single clicks can be performed with @click, doubles are simply @dblclick.
        </p>
        <p>
          You can also pass the variable of $event into the method to recieve information about the dom element such as positioning, classlists and the type of event it is.
        </p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    @click="methodName($event)"

    methodName(event) {
      console.log(event);
    }
                  </code>
                </pre>
        </div>
      </div>
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold mb-4">
          Event Modifiers
        </h2>
        <p>
          Vue provides modifiers that can be appended straight onto directives, below are an overview of all the available and example use cases for reference.
        </p>
        <ul class="m-4">
          <li><strong>.stop</strong> - the click event's propagation will be stopped</li>
          <li><strong>.prevent</strong> - the submit event will no longer reload the page</li>
          <li><strong>.capture</strong> - the event listener will be added in capture mode</li>
          <li><strong>.self</strong> - this will only trigger if the target of the event being called is the element itself</li>
          <li><strong>.once</strong> - the click event will be triggered once</li>
          <li><strong>.passive</strong> - tbc</li>
        </ul>
        <div>
          <pre v-highlightjs>
            <code class="javascript">
    // modifiers can be chained
    v-on:click.stop.prevent="doThat"
            </code>
          </pre>
        </div>
        <p>Order matters when using modifiers because the relevant code is generated in the same order.</p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    // prevents all clicks
    v-on:click.prevent.self

    // will only prevent clicks on the element itself
    v-on:click.self.prevent
                  </code>
                </pre>
        </div>
      </div>
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold mb-4">
          Keyboard Events
        </h2>
        <p>
          Vue can listen for certain keyboard events by attaching a v-on to a target element, this element has to be focused in order for it to register. The example below has a keyboard event watching for each time the up key is pressed and this in return fires a function that is increasing a count each time an event is recorded.
        </p>
        <div>
          <pre v-highlightjs>
            <code class="javascript">
    v-on:keydown.up="increaseCount()"
            </code>
          </pre>
        </div>
        <div>
          <p>[press up] times pressed: {{ data.count }}</p>
          <input placeholder="press up here" class="border border-black my-4 p-2" v-on:keydown.up="increaseCount()" />
        </div>
        <div>
          <p>
            Vue provides aliases for common keys such as:<br>
            <span>.enter | .tab | .delete | .esc | .space | .up | .down | .left | .right</span><br>
          </p>
          <p class="mt-4">
            Exact &amp; System Modifier Keys:<br>
            <span>.exact | .ctrl | .alt | .shift | .meta (command or windows key respectively)</span>
          </p>
        </div>
        <div>
          <pre v-highlightjs>
            <code class="javascript">
    // this will fire even if Alt or Shift is also pressed
    v-on:click.ctrl="onClick"

    // this will only fire when Ctrl and no other keys are pressed
    v-on:click.ctrl.exact="onCtrlClick"

    // this will only fire when no system modifiers are pressed
    v-on:click.exact="onClick"
            </code>
          </pre>
        </div>
        <!-- <h3 class="text-xl text-black font-bold mb-4">Examples</h3>
        <p>tbc</p> -->
      </div>
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold mb-4">
          Mouse Events
        </h2>
        <p class="mt-4">
            Mouse Button Modifiers:<br>
            <span>.left | .right | .middle</span>
        </p>
        <div>
          <pre v-highlightjs>
            <code class="javascript">
    v-on:click.right="onClick"
            </code>
          </pre>
        </div>
        <button v-on:click.right="data.rightClicked = !data.rightClicked" class="py-2 px-6 text-white" :class="data.rightClicked ? 'bg-green' : 'bg-black' ">click me</button>
        <p class="mt-4">Right clicking the above button toggles a data state which in turn alters the button colour, simply demonstrating the button is only waiting for a right click event. You can then chain on modifiers as above to add further functionality to a button. You could have a button for example that a single left click adds one, a single left click with shift adds 10.</p>
        <h3 class="text-xl text-black font-bold my-4">Tracking pointer movement</h3>
        <p class="">By utilising v-on:mousemove you can record information about the mouse pointers current location, this could be used to move an element towards the users pointer. Below example shows a div with a specific ID having the coords updated when the mouse is moved within the bounding box.</p>
        <div>
          <pre v-highlightjs>
            <code class="javascript">
    function updateXY (e) {
      data.xPos = e.offsetX;
      data.yPos = e.offsetY
    }
            </code>
          </pre>
        </div>
        <div class="flex justify-center">
          <div class="canvas-demo relative border border-b w-2/3 h-56" v-on:mousemove="updateXY">
              <span class="absolute bottom-0 right-0 py-2 px-4">X: {{ data.xPos }}, Y: {{ data.yPos }}</span>
          </div>
        </div>
        
      </div>
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold mb-4">
          Scroll Events
        </h2>
        <p class="mt-4">
            A listener has to be added to the window, the function can then capture or perform whatever the requirement of the component or functionality is. The vue options &amp; composition api differ as outlined below.
        </p>
        <div>
          <pre v-highlightjs>
            <code class="javascript">
    // Options API
    created() {
      window.addEventListener('scroll',this.handleScroll);
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll(event) {
        // do something
      }
    }

    // Composition API (all nested within setup)
    setup() {
      
      window.addEventListener('scroll', handleScroll);

      function handleScroll(event) {
        // do something
      }

      onUnmounted(() => {
        window.removeEventListener('scroll', this.handleScroll);
      })
    }
            </code>
          </pre>
        </div>
        <!-- <h3 class="text-xl text-black font-bold mb-4">Examples</h3>
        <p>tbc</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import PageHeading from '../../../components/Page/PageHeading.vue'



export default {
  setup() {
    const data = reactive({
      count: 0,
      rightClicked: false,
      xPos: 0,
      yPos: 0
    })

    window.addEventListener('scroll', handleScroll);

    function increaseCount() {
      return data.count = data.count + 1;
    }

    function handleScroll () {
      // console.log(document.documentElement.scrollTop);
    }

    function updateXY (e) {
      data.xPos = e.offsetX;
      data.yPos = e.offsetY
    }

    return {
      data,
      increaseCount,
      handleScroll,
      updateXY
    }
  },
  components: {
    'page-heading' : PageHeading
  }
}
</script>