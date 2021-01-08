const Vue = () => import('../../views/singles/Vue.vue');
const Javascript = () => import('../../views/singles/Javascript.vue');
const Typescript = () => import('../../views/singles/Typescript.vue');

export default [
    { path: '/vue', component: Vue },
    { path: '/javascript', component: Javascript },
    { path: '/typescript', component: Typescript },
];