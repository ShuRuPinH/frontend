import { createRouter, createWebHistory } from 'vue-router'
import { routeGuard } from '@/auth'
import Callback from "@/vuews/Callback";

const routes = [
    {
        path: '/callback',
        name: 'Callback',
        component: Callback
    },
    {
          path: '/',
        name: 'Info',
        component: () => import( '../vuews/Info'),


    },
    {

        path: '/app',
        name: 'App',
        component: () => import( '../vuews/App'),
        beforeEnter: routeGuard


        },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import( '../vuews/Admin'),
        beforeEnter: routeGuard
    },
    {
        path: '/wait',
        name: 'Wait',
        component: () => import( '../vuews/Wait'),
    },
]

/*const router = createRouter({
    history: createWebHistory(),

    routes
})*/
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

