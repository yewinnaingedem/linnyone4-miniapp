import Router from "vue-router" ;
import MainComponent from "@/views/App/MainComponent.vue";
const routes = [
    {
        path : "/" ,
        component : MainComponent ,
    }
]

const router  = Router({
    mode : "history",
    routes 
});

export default router ;