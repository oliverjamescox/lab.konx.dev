const State = () => import('../../views/Sets/Basics/State.vue');
const Binding = () => import('../../views/Sets/Basics/Binding.vue');
const Events = () => import('../../views/Sets/Basics/Events.vue');

export default [
    { path: '/basics/state', component: State },
    { path: '/basics/binding', component: Binding },
    { path: '/basics/events', component: Events },
];