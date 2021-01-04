const State = () => import('../../views/sets/Basics/State.vue');
const Binding = () => import('../../views/sets/Basics/Binding.vue');
const Events = () => import('../../views/sets/Basics/Events.vue');

export default [
    { path: '/basics/state', component: State },
    { path: '/basics/binding', component: Binding },
    { path: '/basics/events', component: Events },
];