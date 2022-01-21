import { createRouter, createWebHistory } from 'vue-router'


const routes = [


    {

        path: '/',
        name: 'App',
        component: () => import( '../ vuews/App'),

        },
    {
        path: '/admin',
        name: 'Admin',
        component: () => import( '../ vuews/Admin'),
    },
    {
        path: '/wait',
        name: 'Wait',
        component: () => import( '../ vuews/Wait'),
    },
]

const router = createRouter({
    history: createWebHistory(),

    routes
})


export default router

