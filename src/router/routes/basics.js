const State = () => import('../../views/vue/basics/State.vue');
const Binding = () => import('../../views/vue/basics/Binding.vue');
const Events = () => import('../../views/vue/basics/Events.vue');
const Rendering = () => import('../../views/vue/basics/Rendering.vue');
const Components = () => import('../../views/vue/basics/Components.vue');

export default [
    { path: '/vue/basics/state', component: State },
    { path: '/vue/basics/binding', component: Binding },
    { path: '/vue/basics/events', component: Events },
    { path: '/vue/basics/rendering', component: Rendering },
    { path: '/vue/basics/components', component: Components },
];