<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Slots &amp; Dynamic Components"
      bg-colour="green"
    />
    <div class="p-6 md:p-12 lg:py-12 lg:px-20">
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold my-4">
          Slots
        </h2>
        <p class="my-2">Allow for re-usability of components by passing down specific aspects. I.e you could create a single card component but utilise slots to populate certain sections differently.</p>
        <div>
          <pre v-highlightjs>
                  <code class="html">
    // parent component
    &lt;template&gt;
      &lt;div&gt;
        &lt;slot-child-component&gt;
            &lt;h3 class="child-content" #heading /&gt;
              You are my first child
            &lt;/h3&gt;
        &lt;/slot-child-component&gt;
      &lt;/div&gt;
    &lt;/template&gt;
                  </code>
                </pre>
        </div>
        <p class="my-2">So rather than typically declaring a component and self closing the information you want to pass to that component is wrapped within, this example just has a h3. Adding a name is done by wrapping the code in a template tag and adding an id. such as #header. the slot of the child dictactes what goes where by referencing with slot name="heading", if the component only has one it will automatically default to that so no need for naming.</p>
        <div>
          <pre v-highlightjs>
                  <code class="html">
    // child component
    &lt;template&gt;
      &lt;div&gt;
        &lt;slot #heading&gt;&lt;/slot&gt; // h3 would appear here
      &lt;/div&gt;
    &lt;/template&gt;
                  </code>
                </pre>
        </div>
        <div>
          <slot-child-component>
            <template #heading>
              <h3>Slot Heading</h3>
            </template>
          </slot-child-component>
          <slot-child-component>
            <template #footer>
              <h3>Slot Footer</h3>
            </template>
          </slot-child-component>
          <p class="my-2">The above example calls the same component twice but each time has differing content wrapped within and also is referencing a different slot name.</p>
        <div>
          <pre v-highlightjs>
                  <code class="html">
    // parent component
    &lt;template&gt;
    &lt;slot-child-component&gt;
      &lt;template #heading&gt;
        &lt;h3&gt;Slot Heading&lt;h3&gt;
      &lt;/template&gt;
    &lt;/slot-child-component&gt;

    &lt;slot-child-component&gt;
      &lt;template #footer&gt;
        &lt;h3>Slot Footer&lt;/h3&gt;
      &lt;/template&gt;
    &lt;/slot-child-component&gt;
                  </code>
                </pre>
        </div>
        <div>
          <pre v-highlightjs>
                  <code class="html">
    // child component
    &lt;template&gt;
    &lt;div class="bg-green text-white p-2 my-4"&gt;
        &lt;slot name="heading"&gt;&lt;/slot&gt;
        &lt;p>This is the slot child component, this sentence is in the component&lt;/p&gt;
        &lt;slot name="footer"&gt;&lt;/slot&gt;
    &lt;/div&gt;
    &lt;/template&gt;
                  </code>
                </pre>
        </div>
        <h3 class="text-xl font-bold mb-4">Slot Props</h3>
        <p class="my-4">tbd</p>
        <h3 class="text-xl font-bold mb-4">Examples</h3>
        <ul>
          <li>- Form Builder</li>
          <li>- Card Builder</li>
        </ul>
        </div>
      </div>
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold my-4">
          Dynamic Components
        </h2>
        <p class="my-2">Used to dynamically load a component depending on a condition or field value, we implement and use dynamic components for page builders all the time. Below are the steps to re-create and how it works.</p>
        <ul>
          <li>1. On page view (i.e index.vue) import the page-builder component, this is accepting the block prop and taking all the data contained within entry.pageBuilder, typically this would be block.ContentBlock, block.Image etc from the child component when accessing the props.</li>
          <li>2. using the syntax for dynamic component is essentially just using the tag component and the :is referencing the component you want it to be. The power of this with a pagebuilder is you don't need a long switch statement, all you need to do is import the new component, make sure it has a typehandle and the dynamic component will handle the rest. The data is passed down again via prop cascading down from the original view.</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div>
          <pre v-highlightjs>
                  <code class="html">
    // Page view [1]
    &lt;page-builder :blocks="entry.pageBuilder" class="" /&gt;
    
    // Parent Component [2]
    &lt;component v-for="block,index in blocks" :key="index" :is="block.typeHandle" :block="block" /&gt;
                  </code>
                </pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import PageHeading from '../../../components/Page/PageHeading.vue'
import SlotChildComponent from '../../../components/Basics/SlotChildComponent.vue'

export default {
  setup() {
    const data = reactive({
    })

    function runFunction() {
        alert('emit from child component fired.')
    }

    return {
      data,
      runFunction
    }
  },
  components: {
    'page-heading' : PageHeading,
    'slot-child-component' : SlotChildComponent
  }
}
</script>