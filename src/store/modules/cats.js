/*const mongoose = require("mongoose");
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_collection = process.env.DB_COLLECTION;
const db_url = `mongodb+srv://${db_user}:${db_password}@mongo-01.exofm.mongodb.net/${db_collection}?retryWrites=true&w=majority`;
mongoose.connect(
    db_url,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    },
    (err) => {
        if (!err) {
            console.log("Connection successful");
        } else {
            console.log("No Connection");
        }
    }
);*/
import axios from "axios"
import cats from './cats.json'

export default{
    state:{
        cats: cats,
        searchCats:{keyword:null},
        deletedCats:[],
        favouriteCats:[],
        perPage:localStorage.getItem('page'),
        plus:3,
        total:0
    },
    mutations:{
        apiFetch(state){
            axios.get(`https://api.api-ninjas.com/v1/cats?grooming=5&offset=${state.perPage}`,
            {
                headers:{
                    "X-Api-Key": "7xjju0jL+F4JgZwkgXqalw==SxsZAt2Vvxrb4NlN"
                }
                
            }).then(function(response){
                state.cats = response.data
                state.total=state.cats.length;
               console.log(state.cats);
               console.log(response.data);
            })
        },
        addCats(state){
         
        console.log(state);
            state.perPage-=state.plus;
               localStorage.removeItem('page');
            localStorage.setItem('page',state.perPage)
          
       }
    },
    getters:{
       cats(state){
        if(state.searchCats.keyword){
            return state.cats.filter(function(cats){
                return cats.name.toLowerCase().includes(state.searchCats.keyword.toLowerCase().trim());
            })
        }
        return state.cats;
       },
       notDeletedCats(state, getters){
        return getters.cats.filter(x => !state.deletedCats.includes(x.name))
    },
    getFavouriteDogs(state, getters){
        return getters.notDeletedCats.filter(x => state.favouriteCats.includes(x.name))
    },
    
   
    }
}
