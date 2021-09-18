import { createRouter, createWebHistory } from 'vue-router'

import Sell from './components/service/sell/Main.vue'

const routes = [
    {
        path: '/service',
        name: 'Sell',
        component: Sell
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;