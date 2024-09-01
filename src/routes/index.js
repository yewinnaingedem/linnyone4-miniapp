import { createMemoryHistory, createRouter } from 'vue-router'
import HomePage from "@/pages/HomePage.vue";
import { handleMenubar } from '@/assets/test';
import { nextTick } from 'vue';
const routes = [
    {
        path : "/" ,
        component :  HomePage,
    },
    {
        path : "/counter/vue" ,
        component : () => import('@/views/CounterComponent.vue'),
    },
    {
        path : "/contact_us",
        component : () => import('@/views/ContactUs.vue'),        
    },
    {
        path : "/t_q_layout" ,
        component : () => import('@/views/t&QLayout.vue')
    }
]

const router  = createRouter({
    history : createMemoryHistory(),
    routes 
});
// eslint-disable-next-line
router.afterEach((_to, _from) => {
    nextTick(() => {
        handleMenubar();  // Apply jQuery after the DOM has updated
    });
});

export default router ;