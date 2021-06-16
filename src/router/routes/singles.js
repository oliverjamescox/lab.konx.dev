const Documentation = () => import('../../views/singles/Documentation.vue');
const Animation = () => import('../../views/singles/Animation.vue');
const Components = () => import('../../views/singles/Components.vue');

export default [
    { path: '/documentation', component: Documentation },
    { path: '/animation', component: Animation },
    { path: '/components', component: Components },
];