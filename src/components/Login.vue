<template>
    <div>
        <div class="d-flex flex-column justify-content-between align-items-center login_wrap">
            <div class="login_naslov w-100">
                <h4 class="m-5 ">Login</h4>
            </div>
            <div>
    <input type="text" class="input" v-model="username" placeholder="Username" />
    <input type="password" class="input" v-model="password" placeholder="password" />
    <p class="text-danger">{{error}}</p>
</div>
<div class="button"> <input type="button" value="Login" @click="loginUser()" class="login_button text-white m-3"></div>
<div class="button d-flex flex-column align-items-center"><Label>Don't have account? Sign up here</Label> <router-link to="/registration" class="login_button text-white m-3 d-flex align-items-center p-3">Registration</router-link></div>
        </div>
    </div>  
</template>
<script>
import { mapGetters } from 'vuex'
import { eventBus } from '@/main';
export default{
    name:"LogiN",
    data(){
        return{
            
                    username:"nikola@gmail.com",
                    password:"djura",
                    error:"",
                    user:JSON.parse(localStorage.getItem('user')),
                    
            
        }
    },
    computed:{
        ...mapGetters(['users'])
    },
    getters:{
        users(state){
            return state.users
        },
    },
    methods:{
        loginUser(){
                this.error = ""
                let getUsername = this.username
                let getPassword = this.password

                if(!getUsername){
                    this.error = "Insert username."
                }
                if(!getPassword){
                    this.error += " Insert password."
                }

                let getUser = this.users.find(x => x.username == getUsername && x.password == getPassword)
                if(!getUser){
                    this.error += " Invalid credentials."
                }

                if(this.error){
                    console.log(this.error);
                    return;
                }

                let userObj = {
                    username: getUser.username,
                    role: getUser.role
                }
               
                this.$store.commit('login',userObj)
                let updateUser = JSON.parse(localStorage.getItem('user'))
                eventBus.$emit('refreshNav', updateUser)
                this.$emit('FinalMessage','');
                this.$router.push("/home")
                
            },
            isLoged(){
                if(this.user){
                    
                    this.$router.push('/home');
                    this.$emit('Useri',this.user);
                    
                }
            }
    },
    mounted(){
        this.isLoged();
        
    }
}
</script>
