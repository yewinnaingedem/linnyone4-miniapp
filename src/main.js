import { createApp } from 'vue'
import App from './App.vue' ;
import router from "./routes";
import store from './store';
import { createI18n } from "vue-i18n" ;

// css
import "@/assets/css/style.css";
// localization 
import EN from "@/lang/en.json" ;
import MM from "@/lang/mm.json" ;
// custom css 
import "@/assets/css/custom.css" ;

// import bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
// custom js

import '@/assets/test/index'; 


const i18n = createI18n({
  locale : "EN" ,
  messages : {
    EN ,
    MM 
  },
});
createApp(App).use(router).use(store).use(i18n).mount('#app')
