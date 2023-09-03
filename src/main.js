import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import VueRouter from "vue-router";
import login from './components/Login.vue'
import home from "./components/Home.vue"
import store from "./store/modules/store.js"
Vue.config.productionTip = false

const routes=[
  {path:"/login",component:login},
  {path:"/home",component:home}
]
Vue.use(VueRouter);
const router=new VueRouter({routes});

new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
