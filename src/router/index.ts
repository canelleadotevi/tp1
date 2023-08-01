import {createRouter, createWebHistory} from 'vue-router'
import ToDo from '../views/ToDo.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path:'/',
            name:'home',
            component: ()=> ToDo
        }
    ]
})
export default router