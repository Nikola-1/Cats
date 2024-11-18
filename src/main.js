import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import "jquery/dist/jquery.js";
import VueRouter from "vue-router";
import login from './components/Login.vue'
import home from "./components/Home.vue"
import store from "./store/modules/store.js"
import details from './components/Details.vue'
import favorites from './components/Favorites.vue'
import TextBox from './components/TextBox.vue'
import Select from './components/Select.vue'
import Registration from './components/Register.vue'
import Admin from './components/Admin.vue'
export const eventBus = new Vue();

Vue.component("TextBox", TextBox)
Vue.component("SelectComponent", Select)

Vue.config.productionTip = false


const routes=[
  {path:"/login",component:login},
  {path:"/home",component:home},
  {path:"/",component:home},
  {name:"details",path:"/details/:name",component:details},
  {path:"/favorites",component:favorites},
  {path:"/registration",component:Registration},  //  https://api-ninjas.com/images/cats/arabian_mau.jpg
  {path:"/admin",component:Admin}
]
Vue.use(VueRouter);
const router=new VueRouter({routes});

new Vue({
  router,store,
  render: h => h(App),
}).$mount('#app')
