<template>
  <div id="app">
    <Head></Head>
    <Nav :links="Linkovi" @Useri="getUser" @message="GiveMessage"></Nav>
    <router-view :user2="this.user" @Useri="getUser" @FinalMessage="GiveMessage"  :MsgForProduct="ProductMsg"></router-view>
    <Footer></Footer>

  </div>
</template>

<script>

import Nav from './components/Nav.vue'
import Head from './components/Head.vue'
import Footer from './components/Footer.vue'

import { eventBus } from './main'
export default {
  name: 'App',
  components: {
    Nav,Head,Footer
  },
  data(){
    return{
      Linkovi:[
        {
          name:"HOME",
          path:"/home"
        },
        {
          name:"Log in",
          path:"/login"
        }
      ],
      ProductMsg:'',
      user:JSON.parse(localStorage.getItem('user')),
    }
  },
  created(){
    eventBus.$on('refreshNav',updateData =>{this.user=updateData})
    localStorage.setItem('page',13);
    this.$store.commit('apiFetchAll')
  },
  methods:{
    getUser(value){
      this.user=value
      console.log(value)
    },
    GiveMessage(value){
      this.ProductMsg=value
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: unset;
}
</style>
