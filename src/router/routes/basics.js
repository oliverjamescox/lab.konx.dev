const State = () => import('../../views/Sets/Basics/State.vue');
const Binding = () => import('../../views/Sets/Basics/Binding.vue');

export default [
    { path: '/basics/state', component: State },
    { path: '/basics/binding', component: Binding },
];