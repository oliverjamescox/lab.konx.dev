const State = () => import('../../views/vue/basics/State.vue');
const Binding = () => import('../../views/vue/basics/Binding.vue');
const Events = () => import('../../views/vue/basics/Events.vue');
const Rendering = () => import('../../views/vue/basics/Rendering.vue');
const Components = () => import('../../views/vue/basics/Components.vue');
const PassingData = () => import('../../views/vue/basics/PassingData.vue');
const Slots = () => import('../../views/vue/basics/Slots.vue');

export default [
    { path: '/vue/basics/state', component: State },
    { path: '/vue/basics/binding', component: Binding },
    { path: '/vue/basics/events', component: Events },
    { path: '/vue/basics/rendering', component: Rendering },
    { path: '/vue/basics/components', component: Components },
    { path: '/vue/basics/passing-data', component: PassingData },
    { path: '/vue/basics/slots', component: Slots },
];