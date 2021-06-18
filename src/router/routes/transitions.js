const TransitionWrapper = () => import('../../views/animation/transitions/TransitionWrapper.vue');
const TransitionGroup = () => import('../../views/animation/transitions/TransitionGroup.vue');
const RouterTransitions = () => import('../../views/animation/transitions/RouterTransitions.vue');
const JavascriptHooks = () => import('../../views/animation/transitions/JavascriptHooks.vue');
const GSAP = () => import('../../views/animation/transitions/GSAP.vue');

export default [
    { path: '/animation/transitions/transition-wrapper', component: TransitionWrapper },
    { path: '/animation/transitions/transition-group', component: TransitionGroup },
    { path: '/animation/transitions/router-transitions', component: RouterTransitions },
    { path: '/animation/transitions/javascript-hooks', component: JavascriptHooks },
    { path: '/animation/transitions/gsap', component: GSAP }
];