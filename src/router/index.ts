import {createRouter, createWebHistory} from 'vue-router'
import to_do from '@/views/to_do.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component: ()=> import ('../views/to_do.vue')
        }
    ]
})
export default router