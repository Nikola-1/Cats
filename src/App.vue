<template>
  <div id="app">
    <Head></Head>
    <Nav :links="Linkovi"></Nav>
    <router-view></router-view>
    <Footer></Footer>

  </div>
</template>

<script>

import Nav from './components/Nav.vue'
import Head from './components/Head.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Nav,Head,Footer
  },
  data(){
    return{
      Linkovi:[
        {
          name:"LOGOVANJE",
          path:"/login"
        },
        {
          name:"HOME",
          path:"/home"
        }
      ]
    }
  }
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
