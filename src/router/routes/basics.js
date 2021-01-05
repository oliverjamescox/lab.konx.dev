const State = () => import('../../views/sets/Basics/State.vue');
const Binding = () => import('../../views/sets/Basics/Binding.vue');
const Events = () => import('../../views/sets/Basics/Events.vue');

export default [
    { path: '/vue/basics/state', component: State },
    { path: '/vue/basics/data', component: Binding },
    { path: '/vue/basics/events', component: Events },
];