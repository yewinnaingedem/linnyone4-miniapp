import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
const routes = [
    {
        path : "/" ,
        component :  HomePage,
    },
    {
        path : "/counter/vue" ,
        component : import('@/views/CounterComponent.vue'),
    }
]

const router  = createRouter({
    history : createMemoryHistory(),
    routes 
});

export default router ;