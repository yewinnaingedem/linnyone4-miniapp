import { createApp } from 'vue'
import App from './App.vue' ;
import router from "./routes";
import store from './store';

// css
import "@/assets/css/style.css";

// custom css 
import "@/assets/css/custom.css" ;

// fontawesom 
// import "fontawesome";


// js 
/* import "@/assets/js/jquery.js";
  import "@/assets/js/script.js"; */

createApp(App).use(router).use(store).mount('#app')
