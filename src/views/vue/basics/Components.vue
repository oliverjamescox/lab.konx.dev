<template>
  <div class="text-grey leading-relaxed container mx-auto bg-white h-full">
    <page-heading
      title="Components"
      bg-colour="green"
    />
    <div class="p-6 md:p-12 lg:py-12 lg:px-20">
      <div class="mb-8">
        <p class="my-2">
          The ability to isolate and control every aspect of the project to the smallest detail can be achieved with components. You can have large all encompassing total pages as a single .vue file and be considered a "component" or have components nested within components such as a blog card component with a image and button component nested within it.
        </p>
        <p>
            The obvious benefits being the reduction in technical debt in terms of modular functionality allowing for elements to be interchanged simply, great for readability. The only real negative of going OTT with nested components is it's perhaps a little overkill and passing data up and down between the numerous levels could lead to excessive prop and emitting.
        </p>
        <h3 class="text-xl text-black font-bold my-4">Structure</h3>
        <p class="my-2">Made up of 3 key blocks, the first is the template, this will contain everything viewable on the frontend, in vue 2 a parent div is required but in vue 3 this is no longer required. Secondly the script block, contains all of the logic for the component, methods, computed properties, data etc. In vue 2 the options API is the defacto choice. In vue 3 it's switched to the composition api which I am using on this project. Lastly the style block, used to contain specific styles for the block (so called CSS in JS). You can use webpack etc to add loaders to allow for support of scss global variables, also scope the styles to only this component easily by adding scope to the tag preventing styling conflicts.</p>
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
      <!-- <div class="mb-8">
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
      </div> -->
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import PageHeading from '../../../components/Page/PageHeading.vue'



export default {
  setup() {
    const data = reactive({
    })

    return {
      data,
      'page-heading' : PageHeading,
    }
  }
}
</script>