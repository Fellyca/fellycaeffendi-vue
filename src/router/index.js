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
    path: '/dashboard',
    name: 'dashboard',
    component: () => import ('@/views/dashboard/Main.vue')
},
{
    path: '/profil',
    name: 'profil',
    component: () => import ('@/views/profil/Main.vue')
},
{
    path: '/about',
    name: 'about',
    component: () => import ('@/views/about/Main.vue')
},
{
    path: '/users',
    name: 'users',
    component: () => import ('@/views/users/Main.vue')
},
{
    path: '/create-user',
    name: 'createuser',
    component: () => import ('@/views/users/FormCreate')
},
{
    path: '/users/:id/:username?',
    name: 'detailuser',
    component: () => import ('@/views/users/DetailUser')
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