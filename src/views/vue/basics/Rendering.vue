<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Rendering"
      bg-colour="green"
    />
    <div class="p-6 md:p-12 lg:py-12 lg:px-20">
      <div class="mb-8">
        <p class="my-2">
          A core part of javascript frameworks and vue is to address complexities with building dynamic state driven frontends. i.e perhaps a page you only want certain components visible to certain users, or users at a different point in a user journey should only be able to see certain aspects of the process. This can be achieved easily with either v-if or v-show tags on the html.
        </p>
        <p class="my-2"></p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    v-if="data"

    v-show="data"
                  </code>
                </pre>
        </div>
        <p>
          v-if is completely removed from the DOM unless the conditions are met, v-show by comparison uses a inline style of display:none when conditions aren't met. Considered more preferable with elements that may be toggled multiple times such as an accordion.
        </p>
        <div class="my-4">
            <div class="flex flex-row my-2">
                <button class="text-white bg-red p-2 mr-4" @click="data.error = !data.error">Toggle Error</button>
                <button class="text-white bg-green p-2" @click="data.success = !data.success">Toggle Success</button>
            </div>
            
            <p class="text-red" v-if="data.error">There was an error</p>
            <p class="text-green" v-else-if="data.success">Success</p>
        </div>
        <p class="my-2">
          Simple example that when buttons are toggled change the current state of error &amp; success. The text rendered below is then dependant on the state of the two buttons, if error is true will show the error message, if error is false and success is true the success message will show. The use of the v-else-if also catches that success should and can never be rendered if there is currently an error and the error will be rendered instead.
        </p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    @click="data.error = !data.error"
    @click="data.success = !data.success"

    v-if="data.error" // render error message
    v-else-if="data.success" // only render success message if success is true and error is false
                  </code>
                </pre>
        </div>
      </div>
      <div class="mb-8">
        <h2 class="text-2xl text-black font-bold mb-4">
          Iteration
        </h2>
        <p class="my-2">
          Keeping your .vue files clean and modular is always the goal in terms of re-usability and readability. Same with following the DRY (Don't repeat yourself) principle which can utilise arrays and objects to iterate over a block of code as many times as possible with no need to copy and paste blocks. This is achieved with the v-for directive.
        </p>
        <p class="my-2"></p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    // fruits: [ 'Apple', 'Banana', 'Orange' ]

    li :key="index" v-for="(fruit,index) in data.fruits"
                  </code>
                </pre>
        </div>
        <h3 class="text-xl text-black font-bold mb-4">
          Arrays
        </h3>
        <p>
          A simple array of 3 containing fruits, the v-for will take that array and repeat for as many items are in that array, each loop is then specific to the index position and the data available at that point. example below ouputting the above into an ul with individual fruit items populating the li's.
        </p>
        <p class="my-2">For a slightly expanded explanation of what is going on the v-for loops through the specified data array and assigns each entry, with the code looking like this.. v-for="fruit in fruits. Outside of the loop the above isn't accessible and outputs as this.. fruits: {{ data.fruits }} | fruit: {{ data.fruit }}</p>
        <p class="my-2">The data is output as the array it is but the fruit isn't yet assigned so shows as empty, this word can be anything, can be undestood the fruit is one of fruits and the v-for is looping through each of them.</p>
        <div class="my-4">
            <ul>
                <li :key="index" v-for="(fruit,index) in data.fruits">- {{ fruit }}, index: {{ index }}</li>
            </ul>
        </div>
        <p class="my-2">
          The v-for has to be placed on the element that's to be repeated, if it was placed on the ul you would end up with 3 seperate ul lists all with just a single li. A key must be used as they are expected to and flag as an issue with modern linting tools.
        </p>
        <h3 class="text-xl text-black font-bold my-4">
          Objects
        </h3>
        <p class="my-2">
          Same as above but the object properties have to be accessed to prevent outputting the entire object, allows for more complex data to be passed to the component.
        </p>
        <p class="my-2">The item (i.e vegetable or fruit) can also have parenthesis and a variable of any name used to count that position it came when the loop ran</p>
        <div>
          <pre v-highlightjs>
                  <code class="javascript">
    // vegetables: [
    //    {name: 'Tomato', colour: 'Red'},
    //    {name: 'Pepper', colour: 'Orange'},
    //    {name: 'Cucumber', colour: 'Green'}
    // ],

    li :key="index" v-for="(vegetable, index) in data.vegetables"
                  </code>
                </pre>
        </div>
        <div>
            <ul>
                <li :key="index" v-for="(vegetable, index) in data.vegetables">{{ index + 1 }}. The vegetable is called a {{vegetable.name}} and it's colour is {{ vegetable.colour}}.</li>
            </ul>
        </div>
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
      error: false,
      success: false,
      fruits: [
            'Apple', 'Banana', 'Orange'
      ],
      vegetables: [
        {name: 'Tomato', colour: 'Red'},
        {name: 'Pepper', colour: 'Orange'},
        {name: 'Cucumber', colour: 'Green'}
      ],
    })

    return {
      data,
      'page-heading' : PageHeading,
    }
  }
}
</script>