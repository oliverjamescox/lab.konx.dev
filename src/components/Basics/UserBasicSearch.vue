<template>
    <div class="border-t pt-8">
        <h2 class="font-bold text-2xl mb-4">Component: Filterable Array of placeholder cards</h2>
        <div class="mb-12 pb-8 border-b">
            <p>Below example rendering blog cards using dummy data from a blogs object iterating over with a v-for</p>
            <p>The searchbox has a v-model attached, this in turn is used by a computed property to check for a title match</p>
            <p>The computed property allows us to take our original data and perform an action, in this example the ability to filter and only render entries that are a match for whatever is entered into the input field.</p>
        </div>
        <div class="container">
            <input class="search-box border" type="text" v-model="data.search" placeholder="Search..." />
            <p class="p-2">Searching titles for.. <span class="font-bold">{{ data.search }}</span></p>
            <div class="card border" :key="index" v-for="(blog,index) in filteredBlogs">
                <h2 class="text-lg font-bold">{{ blog.title }}</h2>
                <p>{{ blog.copy }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, computed } from 'vue'

export default {

    setup() {
        const data = reactive({
            search: '',
            blogsArray: [
                { 
                    title: `Beast lights upon, all sea. You give in own. Creeping.`,
                    copy: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                },
                { 
                    title: `Have replenish. Void. Fill that itself. Day. Their Fly which.`,
                    copy: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                },
                { 
                    title: `Fifth morning Green creeping also have whales saying own air.`,
                    copy: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`,
                },
                { 
                    title: `Give living from dominion. Male fill midst good above living.`,
                    copy: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.`,
                },
                { 
                    title: `Called over make isn't. The bearing all had earth earth.`,
                    copy: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
                },
                { 
                    title: `Female male morning fifth isn't Beginning, is also you from.`,
                    copy: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.`,
                },
            ],
        })

        const filteredBlogs = computed(() => {
            
            // filter creates a new array with all the elements that pass the test
            return data.blogsArray.filter((blog) => {

                // converts the titles and search input to lowercase to prevent any capitilisation issues and compares the two returning matches
                return blog.title.toLowerCase().match(data.search.toLowerCase());
            });
        })

        return {
            data,
            filteredBlogs
        }
    }
};
</script>

<style>

.search-box {
    width: calc(100% - 20px);
    margin-bottom: 10px;
    padding: 10px;
}

.container {
    margin: 0 auto;
}


.card {
    /*max-width: 500px;*/
    background: #fff;
    margin: 0 auto 10px auto;
    padding: 10px;
}


</style>