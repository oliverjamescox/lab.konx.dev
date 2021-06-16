const State = () => import('../../views/documentation/basics/State.vue');
const Binding = () => import('../../views/documentation/basics/Binding.vue');
const Events = () => import('../../views/documentation/basics/Events.vue');
const Rendering = () => import('../../views/documentation/basics/Rendering.vue');
const Components = () => import('../../views/documentation/basics/Components.vue');
const PassingData = () => import('../../views/documentation/basics/PassingData.vue');
const Slots = () => import('../../views/documentation/basics/Slots.vue');

export default [
    { path: '/documentation/basics/state', component: State },
    { path: '/documentation/basics/binding', component: Binding },
    { path: '/documentation/basics/events', component: Events },
    { path: '/documentation/basics/rendering', component: Rendering },
    { path: '/documentation/basics/components', component: Components },
    { path: '/documentation/basics/passing-data', component: PassingData },
    { path: '/documentation/basics/slots', component: Slots },
];