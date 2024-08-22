import { createMemoryHistory, createRouter } from 'vue-router'
import MainComponent from "@/views/App/MainComponent.vue";
const routes = [
    {
        path : "/" ,
        component : MainComponent ,
    },
    {
        path : "/:name",
        component : import('@/views/App/DetailFruit.vue'),
        props : true ,
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