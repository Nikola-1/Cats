<template>
    <div>
        <div v-if="!user">
            <div class="d-flex flex-column justify-content-between align-items-center login_wrap">
                <div class="login_naslov w-100">
                    <h4 class="m-5 ">Uloguj se</h4>
                </div>
                <div>
        <input type="email" class="input" v-model="email" placeholder="Email" />
        <input type="text" class="input" v-model="username" placeholder="Username" />
        <input type="password" class="input" v-model="password" placeholder="Password" />
        <input type="password" class="input" v-model="ConfirmPassword" placeholder="Confirm password" />
    </div>
    <div class="button"> <input type="button" value="Register" @click="registerUser()" class="login_button text-white m-3"></div>
    
            </div>
        </div>  
        <div v-else>
            <h1>You are already registered.</h1>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

    export default{
        name: 'RegisterPage',
        data(){
            return{
                username: "",
                email: "",
                password: "",
                ConfirmPassword: "",
                error: "",
                user: JSON.parse(localStorage.getItem('user')),
            }
        },
        computed: {
            ...mapGetters(['users'])
        },
        methods:{
            registerUser(){
                this.error = ""
                let newUsername = this.username
                let newEmail = this.email
                let newPassword = this.password
                let newRePassword = this.ConfirmPassword

                let regUsername = /^[a-z]{3,10}.?([a-z]{3,10})?/
                let regEmail = /^[a-z]+([.]?[a-z]*[\d]*)*@[a-z]+([.]?[a-z]+)*(.[a-z]{2,3})+$/
                let regPass = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/

                if(!regUsername.test(newUsername)){
                    this.error = "Invalid username.";
                }
                if(!regEmail.test(newEmail)){
                    this.error += " Invalid mail.";
                }
                if(!regPass.test(newPassword)){
                    this.error += " Invalid password.";
                }
                if(newPassword != newRePassword){
                    this.error += " Passwords don't match."
                }

                let checkUser = this.users.find(x => x.username == newUsername || x.email == newEmail)
                if(checkUser){
                    this.error += " User already exists."
                }

                if(this.error){
                    return
                }

                let userObj = {
                    username: newUsername,
                    email: newEmail,
                    password: newPassword,
                }
                
                this.$store.commit("addUser", userObj)
                
                this.$router.push("/login")
            }
        },
        getters:{
            users(state){
                return state.users
            },
        }
    }
</script>
<style>
    input[type="button"]{
        color:beige !important;
    }
    input[type="button"]:hover{
        cursor: pointer;
    }
</style>
