import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueHighlightJS from 'vue3-highlightjs'

import 'highlight.js/styles/atom-one-dark.css'
import './assets/styles/index.css';
import store from './store'
import icons from './utils/icons';

library.add(icons);

createApp(App)
    .use(store)
    .use(router)
    .use(VueHighlightJS)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')