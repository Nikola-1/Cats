<template>
    <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <span>
                KityCat<i class="fa-solid fa-cat"></i>
              </span>
            </a>
  
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>
  
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  ">
               
                <li class="nav-item" v-for="a,index of Links" :key="index">
                 <router-link :to="a.path" class="link"> {{a.name}}</router-link>
                </li>
                <li class="nav-item" v-if="user">
                  <router-link to='/admin' class="link" v-if="user.role=='admin'">Admin</router-link>
                 </li>
                 <li v-else></li>
                <li class="nav-item" v-if="user">
                  <button type="submit" @click="LogOutUser()" class="btnLog">Log out</button>
                 </li>
              </ul>
              <div class="user_optio_box">
                <a href="#">
                  <i class="fa fa-user" aria-hidden="true">{{user ? user.username : ''}}</i>
                </a>
                <a href="">
                  <router-link to="/favorites" ><i class="fa-solid fa-heart"></i></router-link>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
</template>
<script>
import { eventBus } from '@/main';


export default{
        name:"NaV",
        data(){
          return{
            user:JSON.parse(localStorage.getItem('user')),
            
          }
        },
        created(){
          eventBus.$on('refreshNav',updateData =>{this.user=updateData})
          this.$emit('Useri',this.user)
        },
        methods:{
          LogOutUser(){
            this.$store.commit('LogOutUser');
            this.user=''
            this.$emit('Useri','')
            this.$emit('message','')
            console.log(this.$route);
            if(this.$route.path=="/favorites"){
              this.$router.push('/home')
            }
          }
        },
        props:{
            Links:{
                type:Array,
                required:true
              
            }
                
        }
}
</script>
