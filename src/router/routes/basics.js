const State = () => import('../../views/sets/basics/State.vue');
const Binding = () => import('../../views/sets/basics/Binding.vue');
const Events = () => import('../../views/sets/basics/Events.vue');

export default [
    { path: '/vue/basics/state', component: State },
    { path: '/vue/basics/data', component: Binding },
    { path: '/vue/basics/events', component: Events },
];