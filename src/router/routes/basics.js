const State = () => import('../../views/vue/basics/State.vue');
const Binding = () => import('../../views/vue/basics/Binding.vue');
const Events = () => import('../../views/vue/basics/Events.vue');

export default [
    { path: '/vue/basics/state', component: State },
    { path: '/vue/basics/binding', component: Binding },
    { path: '/vue/basics/events', component: Events },
];