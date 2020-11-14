const State = () => import('../../views/Sets/Basics/State.vue');
const Binding = () => import('../../views/Sets/Basics/DataBinding.vue');

export default [
    { path: '/basics/state', component: State },
    { path: '/basics/data-binding', component: Binding },
];