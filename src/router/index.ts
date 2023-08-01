import {createRouter, createWebHistory} from 'vue-router'
import to_do from '../views/to_do.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component: ()=> to_do
        }
    ]
})
export default router