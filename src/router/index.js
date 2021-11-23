import { createRouter, createWebHistory} from "vue-router";

const routes = [
{
    Path: "/",
    name: "home",
    component: () => import ('@/components/HelloWorld.vue')
},
{
    path: '/login',
    name: 'login',
    component: () => import ('@/views/login/Main.vue')
},
{
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/Main.vue')
}];

const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;