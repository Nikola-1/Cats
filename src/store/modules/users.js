import users from './users.json'

export default{
    state:{
        loggedUser:{username:"",role:""},
        users:users
    },
    mutations:{
        addUser(state,user){
            state.users.push({
                username:user.username,
                email:user.email,
                password:user.password,
                role:'user'
            })
        },
        login(state,user){
            state.loggedUser.username =user.username
            state.loggedUser.role = user.role
            let checkLogin = JSON.parse(localStorage.getItem("user"))
            if(!checkLogin){
                localStorage.setItem("user", JSON.stringify(user));
            }
        },
        updateUser(state,newUser){
            var user=state.users.find(x=>x.email == newUser.email)
            console.log(user.username);
            console.log(newUser.password)
            user.username=newUser.username
            user.password=newUser.password
            console.log(user.password)
        },
        isLoged(){
            console.log(localStorage.getItem('user'))
           return localStorage.getItem('user');
        },
        LogOutUser(){
            localStorage.removeItem('user');
        }
    },
    getters:{
        users(state){
            return state.users
        }
    }
}